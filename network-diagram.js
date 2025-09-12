// Network Diagram Data and Visualization
class NetworkDiagram {
    constructor() {
        this.width = window.innerWidth - 80; // Account for left nav
        this.height = window.innerHeight; // Full height without header
        this.svg = null;
        this.simulation = null;
        this.nodes = [];
        this.links = [];
        this.selectedNode = null;
        this.randomMotionInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupData();
        this.setupSVG();
        this.setupSimulation();
        this.setupControls();
        this.render();
    }
    
    setupData() {
        // Define nodes based on your about list with detailed information
        this.nodes = [
            // Central node - Vaibhav Jain
            { id: "vaibhav", name: "Vaibhav Jain", type: "person", details: "Design Technologist | Architect | Storyteller", x: 0, y: 0, size: 30, color: "#4f8efc" },
            
            // Education nodes with full details
            { id: "ms_cdp", name: "M.S. Computation Design Practices", type: "education", details: "Columbia University, GSAPP, New York (2024-25)", x: 0, y: 0, size: 22, color: "#667eea" },
            { id: "barch", name: "Bachelors of Architecture", type: "education", details: "K.R.V.I.A, Mumbai (2017-2022)", x: 0, y: 0, size: 22, color: "#667eea" },
            
            // Experience nodes with full details
            { id: "spa", name: "Architect", type: "experience", details: "Sameep Padora & Associates, Mumbai (2022-2024)", x: 0, y: 0, size: 20, color: "#f093fb" },
            { id: "production", name: "Production Designer", type: "experience", details: "Mumbai (2022)", x: 0, y: 0, size: 18, color: "#f093fb" },
            { id: "aja", name: "Intern", type: "experience", details: "Abraham John Architects, Mumbai (2021)", x: 0, y: 0, size: 18, color: "#f093fb" },
            { id: "freelance", name: "Freelance", type: "experience", details: "Architecture & Interior Design, Mumbai (2018-2024)", x: 0, y: 0, size: 20, color: "#f093fb" },
            
            // Skills nodes
            { id: "computation", name: "Computation", type: "skills", details: "Technical Skill - Advanced Level", x: 0, y: 0, size: 18, color: "#4facfe" },
            { id: "spatial_data", name: "Spatial Data", type: "skills", details: "Technical Skill - Advanced Level", x: 0, y: 0, size: 18, color: "#4facfe" },
            { id: "architecture", name: "Architecture", type: "skills", details: "Design Skill - Expert Level", x: 0, y: 0, size: 20, color: "#4facfe" },
            { id: "storytelling", name: "Storytelling", type: "skills", details: "Creative Skill - Advanced Level", x: 0, y: 0, size: 16, color: "#4facfe" },
            
            // Location nodes
            { id: "mumbai", name: "Mumbai", type: "location", details: "India - Primary Location", x: 0, y: 0, size: 16, color: "#43e97b" },
            { id: "newyork", name: "New York", type: "location", details: "USA - Current Location", x: 0, y: 0, size: 16, color: "#43e97b" }
        ];
        
        // Define connections between nodes with relationship types
        this.links = [
            // Vaibhav to Education
            { source: "vaibhav", target: "ms_cdp", strength: 0.8, type: "education" },
            { source: "vaibhav", target: "barch", strength: 0.8, type: "education" },
            
            // Vaibhav to Experience
            { source: "vaibhav", target: "spa", strength: 0.7, type: "experience" },
            { source: "vaibhav", target: "production", strength: 0.6, type: "experience" },
            { source: "vaibhav", target: "aja", strength: 0.6, type: "experience" },
            { source: "vaibhav", target: "freelance", strength: 0.7, type: "experience" },
            
            // Vaibhav to Skills
            { source: "vaibhav", target: "computation", strength: 0.9, type: "skills" },
            { source: "vaibhav", target: "spatial_data", strength: 0.9, type: "skills" },
            { source: "vaibhav", target: "architecture", strength: 0.9, type: "skills" },
            { source: "vaibhav", target: "storytelling", strength: 0.7, type: "skills" },
            
            // Education connections
            { source: "ms_cdp", target: "newyork", strength: 0.5, type: "location" },
            { source: "barch", target: "mumbai", strength: 0.5, type: "location" },
            
            // Experience connections
            { source: "spa", target: "mumbai", strength: 0.5, type: "location" },
            { source: "production", target: "mumbai", strength: 0.5, type: "location" },
            { source: "aja", target: "mumbai", strength: 0.5, type: "location" },
            { source: "freelance", target: "mumbai", strength: 0.5, type: "location" },
            
            // Skill connections
            { source: "computation", target: "spatial_data", strength: 0.6, type: "skills" },
            { source: "architecture", target: "storytelling", strength: 0.4, type: "skills" },
            
            // Experience to Skills
            { source: "spa", target: "architecture", strength: 0.5, type: "experience_skills" },
            { source: "freelance", target: "architecture", strength: 0.5, type: "experience_skills" },
            { source: "ms_cdp", target: "computation", strength: 0.6, type: "education_skills" },
            { source: "ms_cdp", target: "spatial_data", strength: 0.6, type: "education_skills" }
        ];

        // Add new nodes if not already present
        const newNodes = [
            { id: "computation", name: "Computation", type: "skill", details: "Placeholder" },
            { id: "architecture", name: "Architecture", type: "skill", details: "Placeholder" },
            { id: "spatial_data", name: "Spatial Data", type: "skill", details: "Placeholder" },
            { id: "designer", name: "Designer", type: "role", details: "Placeholder" },
            { id: "storytelling", name: "Storytelling", type: "role", details: "Placeholder" }
        ];
        newNodes.forEach(n => {
            if (!this.nodes.some(existing => existing.id === n.id)) {
                this.nodes.push(n);
            }
        });
        // Add links to VAIBHAV JAIN if not already present
        newNodes.forEach(n => {
            if (!this.links.some(l => (l.source === "vaibhav" || (l.source.id && l.source.id === "vaibhav")) && (l.target === n.id || (l.target.id && l.target.id === n.id)))) {
                this.links.push({ source: "vaibhav", target: n.id, type: n.type });
            }
        });

        // Add main sections
        const sectionNodes = [
            { id: "education", name: "EDUCATION", type: "section", details: "" },
            { id: "work", name: "PROFESSIONAL WORKS", type: "section", details: "" },
            { id: "skills", name: "SKILLS", type: "section", details: "" },
            { id: "publications", name: "PUBLICATIONS", type: "section", details: "" }
        ];
        sectionNodes.forEach(n => {
            if (!this.nodes.some(existing => existing.id === n.id)) this.nodes.push(n);
            if (!this.links.some(l => (l.source === "vaibhav" || (l.source.id && l.source.id === "vaibhav")) && (l.target === n.id || (l.target.id && l.target.id === n.id)))) {
                this.links.push({ source: "vaibhav", target: n.id, type: "section" });
            }
        });
        // Add EDUCATION sub-nodes
        const educationNodes = [
            { id: "ms_cdp", name: "M.S. Computational Design Practices", type: "education", details: "2024-2025\nGSAPP, Columbia University, New York, USA" },
            { id: "barch", name: "Bachelors of Architecture", type: "education", details: "2017-2022 | CGPA 8.54\nKRVIA, Mumbai, India" }
        ];
        educationNodes.forEach(n => {
            if (!this.nodes.some(existing => existing.id === n.id)) this.nodes.push(n);
            if (!this.links.some(l => (l.source === "education" || (l.source.id && l.source.id === "education")) && (l.target === n.id || (l.target.id && l.target.id === n.id)))) {
                this.links.push({ source: "education", target: n.id, type: "education" });
            }
        });
        // Add WORK sub-nodes
        const workNodes = [
            { id: "junior_architect", name: "Junior Architect @ sP+a", type: "work", details: "Nov 2022 - May 2024\nSameep Padora & Associates, Mumbai" },
            { id: "intern_architect", name: "Intern Architect @ AJA", type: "work", details: "Jan 2021 - July 2021\nAbraham John Architects, Mumbai" },
            { id: "prod_designer", name: "Junior Production Designer", type: "work", details: "June 2022 - Nov 2022\nBaked Brick Productions & Artree Productions" },
            { id: "freelance_architect", name: "Freelance Architect and Interior Designer", type: "work", details: "July 2018 - Present" }
        ];
        workNodes.forEach(n => {
            if (!this.nodes.some(existing => existing.id === n.id)) this.nodes.push(n);
            if (!this.links.some(l => (l.source === "work" || (l.source.id && l.source.id === "work")) && (l.target === n.id || (l.target.id && l.target.id === n.id)))) {
                this.links.push({ source: "work", target: n.id, type: "work" });
            }
        });
        // Add SKILLS group nodes
        const skillsGroupNodes = [
            { id: "frontend_backend", name: "Front & Back-end Development", type: "skills_group", details: "Web Development Technologies" },
            { id: "web_data_viz", name: "Web Render & Data Visualization", type: "skills_group", details: "Visualization & Analytics Tools" },
            { id: "gis_mapping", name: "GIS & Spatial Mapping", type: "skills_group", details: "Geographic Information Systems" },
            { id: "iot_arduino", name: "IoT & Arduino", type: "skills_group", details: "Internet of Things & Hardware" },
            { id: "ai_ml", name: "AI & Machine Learning", type: "skills_group", details: "Artificial Intelligence & ML Tools" },
            { id: "design_software", name: "Design & Visualization Software", type: "skills_group", details: "2D/3D Design & Rendering" },
            { id: "bim_tools", name: "BIM & Modeling Tools", type: "skills_group", details: "Building Information Modeling" },
            { id: "graphics_suite", name: "Graphics & Office Suite", type: "skills_group", details: "Creative & Productivity Tools" }
        ];
        skillsGroupNodes.forEach(n => {
            if (!this.nodes.some(existing => existing.id === n.id)) this.nodes.push(n);
            if (!this.links.some(l => (l.source === "skills" || (l.source.id && l.source.id === "skills")) && (l.target === n.id || (l.target.id && l.target.id === n.id)))) {
                this.links.push({ source: "skills", target: n.id, type: "skills" });
            }
        });

        // Add SKILLS tool nodes (children of group nodes)
        const skillsToolNodes = [
            // Front & Back-end Development tools
            { id: "html", name: "HTML", type: "skill_tool", details: "Front-end markup" },
            { id: "javascript", name: "JavaScript", type: "skill_tool", details: "Front-end programming" },
            { id: "python", name: "Python", type: "skill_tool", details: "Back-end programming" },
            { id: "css", name: "CSS", type: "skill_tool", details: "Front-end styling" },
            { id: "firebase", name: "Firebase", type: "skill_tool", details: "Back-end services" },
            
            // Web Render & Data Visualization tools
            { id: "d3js", name: "D3.js", type: "skill_tool", details: "Data visualization library" },
            { id: "chartjs", name: "Chart.js", type: "skill_tool", details: "Charting library" },
            { id: "threejs", name: "Three.js", type: "skill_tool", details: "3D graphics library" },
            { id: "pandas", name: "Pandas", type: "skill_tool", details: "Data analysis library" },
            { id: "matplotlib", name: "Matplotlib", type: "skill_tool", details: "Data plotting library" },
            
            // GIS & Spatial Mapping tools
            { id: "qgis", name: "QGIS", type: "skill_tool", details: "Open source GIS" },
            { id: "arcgis", name: "ArcGIS", type: "skill_tool", details: "Professional GIS platform" },
            { id: "mapbox", name: "Mapbox", type: "skill_tool", details: "Mapping platform" },
            
            // IoT & Arduino tools
            { id: "ifttt", name: "IFTTT", type: "skill_tool", details: "IoT automation" },
            { id: "arduino_ide", name: "Arduino IDE", type: "skill_tool", details: "Hardware programming" },
            
            // AI & Machine Learning tools
            { id: "anaconda", name: "Anaconda", type: "skill_tool", details: "Python distribution" },
            { id: "roboflow", name: "Roboflow", type: "skill_tool", details: "Computer vision platform" },
            { id: "hugging_face", name: "Hugging Face", type: "skill_tool", details: "ML model hub" },
            { id: "generative_ai", name: "Generative AI", type: "skill_tool", details: "AI content generation" },
            { id: "computer_vision", name: "Computer Vision", type: "skill_tool", details: "Image processing" },
            { id: "llms", name: "Large Language Models", type: "skill_tool", details: "Natural language processing" },
            
            // Design & Visualization Software tools
            { id: "autocad", name: "AutoCAD", type: "skill_tool", details: "2D/3D CAD software" },
            { id: "rhino", name: "Rhino", type: "skill_tool", details: "3D modeling software" },
            { id: "grasshopper", name: "Grasshopper", type: "skill_tool", details: "Visual programming" },
            { id: "vray", name: "V-Ray", type: "skill_tool", details: "3D rendering engine" },
            { id: "lumion", name: "Lumion", type: "skill_tool", details: "3D visualization software" },
            { id: "enscape", name: "Enscape", type: "skill_tool", details: "Real-time rendering" },
            { id: "twinmotion", name: "Twinmotion", type: "skill_tool", details: "3D visualization" },
            { id: "blender", name: "Blender", type: "skill_tool", details: "3D creation suite" },
            
            // BIM & Modeling Tools
            { id: "revit", name: "Revit", type: "skill_tool", details: "BIM software" },
            { id: "archicad", name: "Archicad", type: "skill_tool", details: "BIM platform" },
            { id: "rhino_inside", name: "Rhino.Inside", type: "skill_tool", details: "BIM integration" },
            
            // Graphics & Office Suite tools
            { id: "adobe_cc", name: "Adobe Creative Cloud", type: "skill_tool", details: "Creative software suite" },
            { id: "microsoft_suite", name: "Microsoft Suite", type: "skill_tool", details: "Office productivity tools" }
        ];
        skillsToolNodes.forEach(n => {
            if (!this.nodes.some(existing => existing.id === n.id)) this.nodes.push(n);
        });

        // Connect tools to their respective group nodes
        const toolToGroupConnections = [
            // Front & Back-end Development connections
            { source: "frontend_backend", target: "html" },
            { source: "frontend_backend", target: "javascript" },
            { source: "frontend_backend", target: "python" },
            { source: "frontend_backend", target: "css" },
            { source: "frontend_backend", target: "firebase" },
            
            // Web Render & Data Visualization connections
            { source: "web_data_viz", target: "d3js" },
            { source: "web_data_viz", target: "chartjs" },
            { source: "web_data_viz", target: "threejs" },
            { source: "web_data_viz", target: "pandas" },
            { source: "web_data_viz", target: "matplotlib" },
            
            // GIS & Spatial Mapping connections
            { source: "gis_mapping", target: "qgis" },
            { source: "gis_mapping", target: "arcgis" },
            { source: "gis_mapping", target: "mapbox" },
            
            // IoT & Arduino connections
            { source: "iot_arduino", target: "ifttt" },
            { source: "iot_arduino", target: "arduino_ide" },
            
            // AI & Machine Learning connections
            { source: "ai_ml", target: "anaconda" },
            { source: "ai_ml", target: "roboflow" },
            { source: "ai_ml", target: "hugging_face" },
            { source: "ai_ml", target: "generative_ai" },
            { source: "ai_ml", target: "computer_vision" },
            { source: "ai_ml", target: "llms" },
            
            // Design & Visualization Software connections
            { source: "design_software", target: "autocad" },
            { source: "design_software", target: "rhino" },
            { source: "design_software", target: "grasshopper" },
            { source: "design_software", target: "vray" },
            { source: "design_software", target: "lumion" },
            { source: "design_software", target: "enscape" },
            { source: "design_software", target: "twinmotion" },
            { source: "design_software", target: "blender" },
            
            // BIM & Modeling Tools connections
            { source: "bim_tools", target: "revit" },
            { source: "bim_tools", target: "archicad" },
            { source: "bim_tools", target: "rhino_inside" },
            
            // Graphics & Office Suite connections
            { source: "graphics_suite", target: "adobe_cc" },
            { source: "graphics_suite", target: "microsoft_suite" }
        ];
        toolToGroupConnections.forEach(conn => {
            if (!this.links.some(l => (l.source === conn.source || (l.source.id && l.source.id === conn.source)) && (l.target === conn.target || (l.target.id && l.target.id === conn.target)))) {
                this.links.push({ source: conn.source, target: conn.target, type: "skills_tools" });
            }
        });
        // Add PUBLICATIONS sub-nodes
        const pubNodes = [
            { id: "kohima_doc", name: "Kohima Study Trip Documentation", type: "publications", details: "VOLUME 1: Architecture of Liminal Identities\nVOLUME 2: Objects, Institutions, Identities" },
            { id: "dissertation", name: "Dissertation Volume", type: "publications", details: "Scrutinization of 'THE FAMILIAL' Sensitivity in Mumbai" }
        ];
        pubNodes.forEach(n => {
            if (!this.nodes.some(existing => existing.id === n.id)) this.nodes.push(n);
            if (!this.links.some(l => (l.source === "publications" || (l.source.id && l.source.id === "publications")) && (l.target === n.id || (l.target.id && l.target.id === n.id)))) {
                this.links.push({ source: "publications", target: n.id, type: "publications" });
            }
        });
    }
    
    setupSVG() {
        this.svg = d3.select("#network-svg")
            .attr("width", this.width)
            .attr("height", this.height);
    }
    
    setupSimulation() {
        // Use a stronger repulsion and longer link distance, but weak link force
        this.simulation = d3.forceSimulation(this.nodes)
            .force("link", d3.forceLink(this.links).id(d => d.id).distance(260).strength(0.07))
            .force("charge", d3.forceManyBody().strength(-900))
            .force("center", d3.forceCenter(this.width / 2, this.height / 2))
            .force("collision", d3.forceCollide().radius(d => (d._nodeWidth ? d._nodeWidth/2 : 120) + 12));
    }
    
    setupControls() {
        // Reset button
        d3.select("#reset-btn").on("click", () => {
            this.resetView();
        });
        
        // Auto layout button
        d3.select("#auto-layout-btn").on("click", () => {
            this.autoLayout();
        });

        // Legend hover events
        const legendTypes = ["education", "experience", "skills", "location"];
        legendTypes.forEach(type => {
            const legendItem = document.querySelector(`.legend-item .legend-color.${type}`)?.parentElement;
            if (legendItem) {
                legendItem.addEventListener("mouseenter", () => {
                    legendItem.classList.add("legend-hover");
                    this.highlightByType(type);
                });
                legendItem.addEventListener("mouseleave", () => {
                    legendItem.classList.remove("legend-hover");
                    this.clearHighlight();
                });
            }
        });
        
        // Fullscreen button
        d3.select("#fullscreen-btn").on("click", () => {
            this.toggleFullscreen();
        });
    }

    highlightByType(type) {
        // Highlight all nodes and links of the given type
        const relatedNodeIds = new Set();
        this.nodes.forEach(node => {
            if (node.type === type) relatedNodeIds.add(node.id);
        });
        // Always include the central node for context
        if (type !== "person") relatedNodeIds.add("vaibhav");

        const relatedLinkIndices = [];
        this.links.forEach((link, index) => {
            if (link.type === type || (relatedNodeIds.has(link.source.id || link.source) && relatedNodeIds.has(link.target.id || link.target))) {
                relatedLinkIndices.push(index);
                relatedNodeIds.add(link.source.id || link.source);
                relatedNodeIds.add(link.target.id || link.target);
            }
        });

        this.nodeElements.style("opacity", d => relatedNodeIds.has(d.id) ? 1 : 0.3)
            .style("filter", d => relatedNodeIds.has(d.id) ? "brightness(1.2)" : "brightness(0.7)");
        this.linkElements.style("opacity", (d, i) => relatedLinkIndices.includes(i) ? 1 : 0.2)
            .style("stroke-width", (d, i) => relatedLinkIndices.includes(i) ? d.strength * 3 : d.strength * 1)
            .style("stroke", (d, i) => relatedLinkIndices.includes(i) ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.1)");
    }
    
    render() {
        // Create links
        const link = this.svg.append("g")
            .selectAll("line")
            .data(this.links)
            .enter().append("line")
            .attr("class", "link")
            .style("stroke-width", d => d.strength ? d.strength * 2 : 2)
            .style("stroke", "rgba(0, 0, 0, 0.2)")
            .style("opacity", 0.6)
            .style("stroke-dasharray", d => {
                // Solid for vaibhav to section, dashed for section to child
                if ((d.source.id || d.source) === "vaibhav") {
                    return ""; // solid
                } else {
                    return "6,4"; // dashed
                }
            });
        
        // Create nodes
        const node = this.svg.append("g")
            .selectAll("g")
            .data(this.nodes)
            .enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", this.dragstarted.bind(this))
                .on("drag", this.dragged.bind(this))
                .on("end", this.dragended.bind(this)));
        
        // Remove old rect/text rendering
        // Instead, use foreignObject for HTML-based card rendering
        node.each(function(d) {
            // Create a temporary div to measure content
            const tempDiv = document.createElement('div');
            tempDiv.className = 'node-card';
            tempDiv.style.position = 'absolute';
            tempDiv.style.visibility = 'hidden';
            tempDiv.style.width = 'auto';
            tempDiv.style.height = 'auto';
            tempDiv.style.display = 'inline-block';
            tempDiv.innerHTML = `<div class='node-title'>${d.name}</div><div class='node-sub'>${d.details}</div>`;
            document.body.appendChild(tempDiv);
            const w = Math.max(210, tempDiv.offsetWidth + 32); // min width + padding
            const h = Math.max(60, tempDiv.offsetHeight + 16); // min height + padding
            document.body.removeChild(tempDiv);
            // Add foreignObject
            d3.select(this)
                .append('foreignObject')
                .attr('x', -w/2)
                .attr('y', -h/2)
                .attr('width', w)
                .attr('height', h)
                .append('xhtml:div')
                .attr('class', 'node-card')
                .html(`<div class='node-title'>${d.name}</div><div class='node-sub'>${d.details}</div>`);
            // Store width/height for later use if needed
            d._nodeWidth = w;
            d._nodeHeight = h;
        });
        
        // Add hover and click handlers
        node.on("mouseenter", (event, d) => {
            this.highlightRelated(d);
        })
        .on("mouseleave", (event, d) => {
            this.clearHighlight();
        })
        .on("click", (event, d) => {
            this.highlightRelated(d);
        });
        
        // Store references for highlighting
        this.linkElements = link;
        this.nodeElements = node;
        
        // Update positions on simulation tick
        this.simulation.on("tick", () => {
            const margin = 20;
            const width = this.width;
            const height = this.height;
            // Add gentle random walk to each node
            this.nodes.forEach(d => {
                const w = d._nodeWidth || 210;
                const h = d._nodeHeight || 70;
                // Random nudge
                const speed = 0.18; // Lower = slower
                d.vx += (Math.random() - 0.5) * speed;
                d.vy += (Math.random() - 0.5) * speed;
                // Clamp position to screen
                d.x = Math.max(margin + w/2, Math.min(width - margin - w/2, d.x));
                d.y = Math.max(margin + h/2, Math.min(height - margin - h/2, d.y));
            });
            this.linkElements
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);
            this.nodeElements
                .attr("transform", d => `translate(${d.x},${d.y})`);
        });

        // After rendering cards, update the collision force with real sizes
        this.simulation.force("collision", d3.forceCollide().radius(d => (d._nodeWidth ? d._nodeWidth/2 : 120) + 12));
        this.simulation.force("link").strength(0.07); // Ensure link force is weak after render
        this.simulation.alpha(1).restart();

        // --- Add continuous random walk motion ---
        if (this.randomMotionInterval) clearInterval(this.randomMotionInterval);
        this.randomMotionInterval = setInterval(() => {
            const speed = 0.18; // Lower = slower
            this.nodes.forEach(d => {
                d.vx += (Math.random() - 0.5) * speed;
                d.vy += (Math.random() - 0.5) * speed;
            });
            this.simulation.alphaTarget(0.1).restart();
        }, 100);
        // --- End random walk motion ---
    }
    
    highlightRelated(node) {
        // Find all related nodes and links
        const relatedNodeIds = new Set([node.id]);
        const relatedLinkIndices = [];
        
        // Find all links connected to this node
        this.links.forEach((link, index) => {
            if (link.source.id === node.id || link.target.id === node.id) {
                relatedLinkIndices.push(index);
                relatedNodeIds.add(link.source.id);
                relatedNodeIds.add(link.target.id);
            }
        });
        
        // Find all links between related nodes
        this.links.forEach((link, index) => {
            if (relatedNodeIds.has(link.source.id) && relatedNodeIds.has(link.target.id)) {
                if (!relatedLinkIndices.includes(index)) {
                    relatedLinkIndices.push(index);
                }
            }
        });
        
        // Highlight related nodes
        this.nodeElements.style("opacity", d => {
            return relatedNodeIds.has(d.id) ? 1 : 0.3;
        })
        .style("filter", d => {
            return relatedNodeIds.has(d.id) ? "brightness(1.2)" : "brightness(0.7)";
        });
        
        // Highlight related links
        this.linkElements.style("opacity", (d, i) => {
            return relatedLinkIndices.includes(i) ? 1 : 0.2;
        })
        .style("stroke-width", (d, i) => {
            return relatedLinkIndices.includes(i) ? d.strength * 3 : d.strength * 1;
        })
        .style("stroke", (d, i) => {
            return relatedLinkIndices.includes(i) ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.1)";
        });
    }
    
    clearHighlight() {
        // Reset all nodes to normal opacity
        this.nodeElements.style("opacity", 1)
            .style("filter", "brightness(1)");
        
        // Reset all links to normal appearance
        this.linkElements.style("opacity", 0.6)
            .style("stroke-width", d => d.strength * 2)
            .style("stroke", "rgba(0, 0, 0, 0.2)");
    }
    
    dragstarted(event, d) {
        if (!event.active) this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    dragended(event, d) {
        if (!event.active) this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
    
    resetView() {
        // Reset all node positions
        this.nodes.forEach(node => {
            node.fx = null;
            node.fy = null;
        });
        
        // Clear selection
        this.selectedNode = null;
        d3.selectAll(".node").classed("selected", false);
        this.clearHighlight();
        
        // Restart simulation
        this.simulation.alpha(1).restart();
    }
    
    autoLayout() {
        // Apply different layout strategies based on node type
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        this.nodes.forEach(node => {
            switch(node.type) {
                case "person":
                    node.fx = centerX;
                    node.fy = centerY;
                    break;
                case "education":
                    node.fx = centerX - 200;
                    node.fy = centerY - 150;
                    break;
                case "experience":
                    node.fx = centerX + 200;
                    node.fy = centerY - 150;
                    break;
                case "skills":
                    node.fx = centerX;
                    node.fy = centerY + 200;
                    break;
                case "location":
                    node.fx = centerX + 300;
                    node.fy = centerY + 100;
                    break;
            }
        });
        
        this.simulation.alpha(1).restart();
        
        // Clear fixed positions after animation
        setTimeout(() => {
            this.nodes.forEach(node => {
                node.fx = null;
                node.fy = null;
            });
        }, 2000);
    }
    
    toggleFullscreen() {
        const body = d3.select("body");
        const isFullscreen = body.classed("fullscreen");
        
        if (isFullscreen) {
            body.classed("fullscreen", false);
            document.exitFullscreen();
        } else {
            body.classed("fullscreen", true);
            document.documentElement.requestFullscreen();
        }
    }
    
    resize() {
        this.width = window.innerWidth - 80; // Account for left nav
        this.height = window.innerHeight; // Full height without header
        
        this.svg
            .attr("width", this.width)
            .attr("height", this.height);
        
        this.simulation
            .force("center", d3.forceCenter(this.width / 2, this.height / 2))
            .restart();
    }
}

// Initialize the network diagram
document.addEventListener('DOMContentLoaded', () => {
    const network = new NetworkDiagram();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        network.resize();
    });
    
    // Handle fullscreen changes
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            d3.select("body").classed("fullscreen", false);
        }
    });
}); 