document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const toolsContainer = document.getElementById('tools-container');
    const searchInput = document.getElementById('search-input');
    const categoryFilters = document.getElementById('category-filters');
    const resultsCount = document.getElementById('results-count');
    const loadingOverlay = document.getElementById('loading-overlay');
    const totalToolsCount = document.getElementById('total-tools');
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    const clearSearchBtn = document.getElementById('clear-search');

    // --- State ---
    let currentFilter = 'all';
    let searchTerm = '';

    // --- Data (to be populated) ---
    // Combine all tool data from separate files
    const allTools = [
        ...(typeof networkTools !== 'undefined' ? networkTools : []),
        ...(typeof webSecurityTools !== 'undefined' ? webSecurityTools : []),
        ...(typeof vulnerabilityScanningTools !== 'undefined' ? vulnerabilityScanningTools : []),
        ...(typeof passwordCrackingTools !== 'undefined' ? passwordCrackingTools : []),
        ...(typeof forensicsTools !== 'undefined' ? forensicsTools : []),
        ...(typeof penetrationTestingTools !== 'undefined' ? penetrationTestingTools : []),
        ...(typeof encryptionTools !== 'undefined' ? encryptionTools : []),
        ...(typeof malwareAnalysisTools !== 'undefined' ? malwareAnalysisTools : []),
        ...(typeof wirelessSecurityTools !== 'undefined' ? wirelessSecurityTools : []),
        ...(typeof socialEngineeringTools !== 'undefined' ? socialEngineeringTools : []),
        ...(typeof incidentResponseTools !== 'undefined' ? incidentResponseTools : []),
        ...(typeof osintTools !== 'undefined' ? osintTools : []),
    ];
    let tools = allTools;

    const categoryInfo = {
        'network-analysis': { icon: '📡', name: 'Network Analysis' },
        'vulnerability-scanning': { icon: '🔍', name: 'Vulnerability Scanning' },
        'password-cracking': { icon: '🔑', name: 'Password Cracking' },
        'web-security': { icon: '🌐', name: 'Web Security' },
        'forensics': { icon: '🔬', name: 'Digital Forensics' },
        'penetration-testing': { icon: '💥', name: 'Penetration Testing' },
        'encryption': { icon: '🔒', name: 'Encryption & Privacy' },
        'malware-analysis': { icon: '🦠', name: 'Malware Analysis' },
        'wireless-security': { icon: '📶', name: 'Wireless Security' },
        'social-engineering': { icon: '👥', name: 'Social Engineering' },
        'incident-response': { icon: '🚨', name: 'Incident Response' },
        'osint': { icon: '🕵️', name: 'OSINT' },
    };

    // --- Functions ---

    /**
     * Renders the tools based on the current filter and search term.
     */
    const renderTools = () => {
        const filteredTools = tools.filter(tool => {
            const categoryMatch = currentFilter === 'all' || tool.category === currentFilter;
            const searchMatch = searchTerm === '' || 
                                tool.name.toLowerCase().includes(searchTerm) || 
                                tool.description.toLowerCase().includes(searchTerm);
            return categoryMatch && searchMatch;
        });

        console.log('Filtered tools count:', filteredTools.length);
        console.log('Current filter:', currentFilter);
        console.log('Search term:', searchTerm);

        toolsContainer.innerHTML = '';

        if (filteredTools.length === 0) {
            toolsContainer.innerHTML = `<p class="no-results">No tools found matching your criteria. Try adjusting your search or filters.</p>`;
            updateResultsCount(0);
            return;
        }

        const groupedTools = filteredTools.reduce((acc, tool) => {
            if (!acc[tool.category]) {
                acc[tool.category] = [];
            }
            acc[tool.category].push(tool);
            return acc;
        }, {});

        console.log('Grouped tools:', groupedTools);
        
        // Special debug for forensics category
        if (groupedTools.forensics) {
            console.log('Forensics tools count:', groupedTools.forensics.length);
            console.log('Forensics tool names:', groupedTools.forensics.map(t => t.name));
        }

        Object.entries(groupedTools).forEach(([category, toolList]) => {
            console.log(`Rendering category: ${category} with ${toolList.length} tools`);
            const info = categoryInfo[category] || { icon: '⭐', name: 'Other' };
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section fade-in';
            
            try {
                categorySection.innerHTML = `
                    <div class="category-header">
                        <h2 class="category-title">
                            <span class="category-icon">${info.icon}</span>
                            ${info.name} (${toolList.length} tools)
                        </h2>
                        <span class="toggle-icon">▼</span>
                    </div>
                    <div class="tools-list">
                        ${toolList.map((tool, index) => {
                            console.log(`Rendering tool ${index + 1}/${toolList.length}: ${tool.name}`);
                            return `
                                <div class="tool-item">
                                    <div class="tool-header">
                                        <h3 class="tool-name">${highlight(tool.name, searchTerm)}</h3>
                                        <span class="tool-type">${tool.type}</span>
                                    </div>
                                    <p class="tool-description">${highlight(tool.description, searchTerm)}</p>
                                    <div class="tool-footer">
                                        <div class="tool-tags">
                                            ${tool.tags.map(tag => `<span>${tag}</span>`).join('')}
                                        </div>
                                        <a href="guides/${tool.id}.html" class="guide-button">View Full Guide &rarr;</a>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
                toolsContainer.appendChild(categorySection);
                console.log(`Successfully rendered ${category} section`);
            } catch (error) {
                console.error(`Error rendering category ${category}:`, error);
            }
        });

        updateResultsCount(filteredTools.length);
        addCategoryToggleListeners();
        console.log('Rendering complete');
    };

    /**
     * Highlights search term in a string.
     */
    const highlight = (text, term) => {
        if (!term) return text;
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, `<span class="highlight">$1</span>`);
    };

    /**
     * Updates the results count display.
     */
    const updateResultsCount = (count) => {
        resultsCount.textContent = `Showing ${count} of ${tools.length} tools.`;
    };

    /**
     * Adds click listeners to category headers to toggle visibility.
     */
    const addCategoryToggleListeners = () => {
        document.querySelectorAll('.category-header').forEach(header => {
            header.addEventListener('click', () => {
                const section = header.parentElement;
                section.classList.toggle('collapsed');
            });
        });
    };


    /**
     * Handles category filter clicks.
     */
    const handleFilter = (e) => {
        if (e.target.tagName === 'BUTTON') {
            currentFilter = e.target.dataset.category;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderTools();
        }
    };

    /**
     * Expands or collapses all categories.
     */
    const toggleAll = (collapse) => {
        document.querySelectorAll('.category-section').forEach(section => {
            if (collapse) {
                section.classList.add('collapsed');
            } else {
                section.classList.remove('collapsed');
            }
        });
    };

    // --- Event Listeners ---
    categoryFilters.addEventListener('click', handleFilter);
    expandAllBtn.addEventListener('click', () => toggleAll(false));
    collapseAllBtn.addEventListener('click', () => toggleAll(true));
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            renderTools();
        });
    }
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchTerm = '';
            renderTools();
        });
    }

    // --- Initial Load ---
    const init = () => {
        console.log('Initializing with tools count:', tools.length);
        console.log('Available tool categories:', Object.keys(tools.reduce((acc, tool) => { acc[tool.category] = true; return acc; }, {})));
        
        if (tools.length > 0) {
            totalToolsCount.textContent = `${tools.length}+`;
            renderTools();
            console.log('Tools rendered successfully');
        } else {
            console.error('Tools data not found or is empty.');
            console.log('Available tool arrays:', {
                networkTools: typeof networkTools !== 'undefined' ? networkTools.length : 'undefined',
                webSecurityTools: typeof webSecurityTools !== 'undefined' ? webSecurityTools.length : 'undefined',
                forensicsTools: typeof forensicsTools !== 'undefined' ? forensicsTools.length : 'undefined',
                vulnerabilityScanningTools: typeof vulnerabilityScanningTools !== 'undefined' ? vulnerabilityScanningTools.length : 'undefined',
                passwordCrackingTools: typeof passwordCrackingTools !== 'undefined' ? passwordCrackingTools.length : 'undefined',
                penetrationTestingTools: typeof penetrationTestingTools !== 'undefined' ? penetrationTestingTools.length : 'undefined',
                encryptionTools: typeof encryptionTools !== 'undefined' ? encryptionTools.length : 'undefined',
                malwareAnalysisTools: typeof malwareAnalysisTools !== 'undefined' ? malwareAnalysisTools.length : 'undefined',
                wirelessSecurityTools: typeof wirelessSecurityTools !== 'undefined' ? wirelessSecurityTools.length : 'undefined',
                socialEngineeringTools: typeof socialEngineeringTools !== 'undefined' ? socialEngineeringTools.length : 'undefined',
                incidentResponseTools: typeof incidentResponseTools !== 'undefined' ? incidentResponseTools.length : 'undefined',
                osintTools: typeof osintTools !== 'undefined' ? osintTools.length : 'undefined'
            });
            toolsContainer.innerHTML = `<p class="no-results error">Error: Cybersecurity tools data could not be loaded. Check console for details.</p>`;
        }

        // Hide loading overlay after a short delay
        setTimeout(() => {
            if (loadingOverlay) {
                loadingOverlay.classList.add('hidden');
                console.log('Loading overlay hidden');
            }
        }, 500);
    };

    // Wait a bit for all tool scripts to load, then initialize
    setTimeout(() => {
        init();
    }, 100);
});
