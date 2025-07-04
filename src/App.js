import React, { useState } from 'react';

// Data extracted and structured from the provided CV.
// IMPORTANT: You will need to replace the placeholder fullDescription
// and additionalImages URLs with your actual project content and images.
const profileData = {
    personal: {
        name: 'Aashish Sharma',
        address: 'Shreejanshil Tole, Tokha Municipality, Ward no. 8, Nepal',
        mobile: '+977-9843600401',
        email: 'itsaabhaas@gmail.com',
        dob: '18-01-1997',
        nationality: 'Nepali',
        profileImage: '/image/profile_photo.jpg' // Path to your profile image in public/image folder
    },
    academic: [
        {
            level: 'Bachelors in Geomatics Engineering',
            duration: '2012-2017',
            institute: 'Institute of Engineering, Pashchimanchal Campus, Affiliated to Tribhuwan University',
            grade: 'Percentage: 71.89%',
            skills: [
                'Surveying', 'Geographic Information System', 'Remote Sensing', 'Geodesy', 'Cartography',
                'Astronomy', 'Earth Observation System', 'Land Resource Mapping', 'Land Use Planning',
                'Cadaster', 'Computer Drafting and Design', 'Spatial Data Infrastructure', 'Land Law',
                'Python for Spatial Data Handling'
            ]
        }
    ],
    experience: [
        {
            date: 'December 2024 – June 2025',
            title: 'Geographic Information System Associate',
            institution: 'United Nations Office for Project Services (UNOPS) – Security and Justice Programme',
            supervisor: 'Meera Chaudhary, CPP and GBV Specialist',
            achievements: [
                'Successfully oversaw the development and implementation of the Community GIS Tool (CGIST), a pivotal system for strengthening problem-solving capabilities for the Nepal Police.',
                'Trained Nepal Police Officials, Psychosocial Workers, and SARA Social Mobilizers on the effective use of the CGIST tool, enhancing their technical capabilities in data collection and analysis.',
                'Played a central role in the SARA Problem Solving Process, actively participating in both the analysis and response phases, contributing to evidence-based problem-solving.',
                'Developed and prepared all Security and Justice Programme related maps, supporting various program objectives and communication efforts, including newsletters.',
                'Monitored daily data collection during the SARA Analysis Phase, ensuring data integrity and consistency for critical program insights.',
                'Conducted extensive data mining of census-related data for all Municipalities of Nepal, providing crucial foundational data for various analytical requirements.',
                'Supported data analysis and visualization efforts, collaborating with the Data and Digital Management Officer to transform raw data into actionable insights.',
                'Contributed to knowledge management initiatives, including data storage and proper indexing, ensuring efficient access and utilization of program data.',
                'Facilitated training sessions for over 7 working local units of SARA (First Phase), significantly contributing to the rollout and adoption of new technological tools for problem-solving.'
            ],
            sampleWorks: [
                {
                    id: 'cgist', // Unique ID for this project
                    name: 'Community GIS Tool (CGIST)',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/FF5733/FFFFFF?text=CGIST+Thumbnail',
                    fullDescription:`The Community GIS Tool (CGIST) is an innovative platform designed to enable the Nepal Police, in collaboration with local communities and governments, to tackle specific problems through data visualization. This tool bridges the gap between data insights and actionable solutions, fostering a collaborative approach to community challenges.

As a key contributor to this initiative, I played a pivotal role in overseeing the development of the platform in partnership with Naxa Pvt. Ltd., the development partner. From its inception to its completion, the CGIST tool was crafted to empower users with spatial data insights for informed decision-making.

After its development, I had the privilege of leading training programs for diverse groups, including:

Nepal Police personnel: to familiarize them with the tool's potential in community-level problem-solving.

Social mobilizers and psychosocial workers: working in seven wards across multiple municipalities in the Karnali, Lumbini, and Sudurpashchim provinces.

In addition to these sessions, community members and local government stakeholders were oriented on the importance of spatial data and trained to leverage CGIST for resolving local challenges. This inclusive approach ensures that the tool is not only understood but also effectively utilized by those at the forefront of community development.

By enabling collaboration and enhancing data-driven decision-making, the CGIST platform continues to contribute to sustainable and impactful problem-solving in Nepal.`,
                    additionalImages: [
                        'https://placehold.co/600x400/FF5733/FFFFFF?text=CGIST+Detail+1',
                        'https://placehold.co/600x400/FF5733/FFFFFF?text=CGIST+Detail+2',
                        'https://placehold.co/600x400/FF5733/FFFFFF?text=CGIST+Detail+3'
                    ]
                },
            ]
        },
        {
            date: 'October 2023 – December 2024',
            title: 'GIS Program Manager',
            institution: 'Oasis Engineering Services Pvt. Ltd.',
            supervisor: 'Mr. Abinash Aryal (Managing Director)',
            achievements: [
                'Developed and implemented a Kobo-Based School Assessment Tool, enabling the identification of disaster-affected schools in Bajhang District.',
                'Conducted training sessions for local stakeholders on data collection techniques, empowering them to effectively utilize the assessment tool and contribute to disaster response efforts.',
                'Produced a comprehensive GIS-based resource map for Aandhikhola Rural Municipality, enhancing disaster preparedness and resource management capabilities in the region.',
                'Formulated and implemented disaster fund mobilization guidelines for Chhinnamasta Rural Municipality in Saptari, facilitating efficient allocation of resources for disaster mitigation and response.',
                'Led a team in identifying open spaces in earthquake-affected regions of Jajarkot and West Rukum, contributing to disaster risk reduction and emergency preparedness efforts.',
                'Spearheaded the preparation of the Municipal Transportation Master Plan (MTMP) for Kailari Rural Municipality, laying the groundwork for sustainable and efficient transportation infrastructure development.'
            ],
            sampleWorks: [
                {
                    id: 'kobo-tool',
                    name: 'Kobo-Based School Assessment Tool',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/3366FF/FFFFFF?text=Kobo+Tool+Thumbnail',
                    fullDescription: 'This project involved the development and implementation of a Kobo-based tool for assessing disaster-affected schools in Bajhang District. The tool enabled rapid and efficient data collection, which was crucial for identifying the extent of damage and prioritizing intervention needs. I also conducted training for local stakeholders on using the tool, ensuring sustainable data collection practices. This initiative significantly improved the response capabilities for educational infrastructure during disaster recovery operations. The data collected was critical for informing government and NGO partners about the specific needs of schools, allowing for targeted aid and reconstruction efforts. This project demonstrates my proficiency in designing and deploying mobile data collection solutions for humanitarian and development contexts.',
                    additionalImages: [
                        'https://placehold.co/600x400/3366FF/FFFFFF?text=Kobo+Detail+1',
                        'https://placehold.co/600x400/3366FF/FFFFFF?text=Kobo+Detail+2',
                        'https://placehold.co/600x400/3366FF/FFFFFF?text=Kobo+Detail+3',
                        'https://placehold.co/600x400/3366FF/FFFFFF?text=Kobo+Detail+4'
                    ]
                },
                {
                    id: 'aandhikhola-map',
                    name: 'GIS-based resource map for Aandhikhola Rural Municipality',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/FF33CC/FFFFFF?text=Aandhikhola+Map+Thumbnail',
                    fullDescription: 'I produced a comprehensive GIS-based resource map for Aandhikhola Rural Municipality, which played a pivotal role in enhancing disaster preparedness and resource management capabilities. This map identified critical infrastructure, natural resources, and vulnerable areas, providing local authorities with a visual tool for planning and response. The project involved extensive fieldwork, data digitization, and spatial analysis to create a highly accurate and actionable resource. This map has been instrumental in supporting the municipality’s efforts to allocate resources efficiently during emergencies and to develop long-term resilience strategies. My work on this project showcases my expertise in creating practical GIS solutions that have direct positive impacts on community safety and development.',
                    additionalImages: [
                        'https://placehold.co/600x400/FF33CC/FFFFFF?text=Aandhikhola+Map+Detail+1',
                        'https://placehold.co/600x400/FF33CC/FFFFFF?text=Aandhikhola+Map+Detail+2'
                    ]
                }
            ]
        },
        {
            date: 'June 2022 – October 2022, October 2022 – October 2023',
            title: 'Information Management Expert (IC), Municipal Information Officer',
            institution: 'United Nations Development Program (UNDP) – Strengthening Urban Preparedness, Earthquake Preparedness and Response (SUPER) in Western Region of Nepal',
            supervisor: 'Mr. Siddhartha Sharma (National Project Coordinator)',
            achievements: [
                'Supported Dhangadhi Sub-Metropolitan City in establishment of Municipal Emergency Operation Center (MEOC)',
                'Supported in preparing and feeding relevant data in BIPAD portal in coordination with DEOC and NEOC',
                'Conducted regular data management and mapping training to MEOC staffs',
                'Prepared 8 risk, vulnerability and capacity maps that later installed at strategic community locations and 24 GIS maps for atlas map book of action wards of Dhangadhi Sub-Metropolitan City',
                'Supported successful mission visit of EU ambassador for Nepal together with UNDP & government officials of national and local level in project location',
                'Led in the development of mobile based form for collecting data regarding building vulnerability of the action wards.',
                'Supported Community Mobilizers for implementation of project interventions in coordination with Municipal Technical Officer and Project Coordinator',
                'Led for publication of regular SitRep and disaster E-Bulletin at MEOC Dhangadhi Sub-Metropolitan City',
                'Supported to facilitate municipal level baseline simulation of Dhangadhi Sub-Metropolitan City, Amargadhi Municipality, Jayprithivi Municipality and Sudurpashchim Province as a key member of simulation control team',
                'Provided “Drone in Disaster Training for Preparedness and Early Response” all disaster stakeholders from Sudurpashchim Province, Karnali Province and Lumbini Province along with participation from government stakeholders from several local government of Sudurpashchim Province.',
                'Participated in various programs and workshops representing UNDP/CDRMP in municipal, district and provincial levels.',
                'Led community based participatory mapping for SUPER project in action wards of Dhangadhi Sub-metropolitan City.',
                'Supported in conduction of Cluster Meetings in Preparation of Contingency Plans (Sudurpashchim Province)',
                'Supported in preparation of Monsoon Preparedness and Response Plan in Sudurpashchim Province.',
                'Supported Dhangadhi Sub-Metropolitan City in preparation of Emergency Preparedness and Response Plan, Disaster Fund Mobilization Guideline, Relief Guideline, Business Continuity Plan, Volunteer Mobilization Guideline.',
                'Supported Dhangadhi Sub-Metropolitan City in finalization of Metric Based House Numbering System based on GIS.'
            ],
            sampleWorks: [
                {
                    id: 'meoc-establishment',
                    name: 'Municipal Emergency Operation Center (MEOC) Establishment',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/FF9900/FFFFFF?text=MEOC+Thumbnail',
                    fullDescription: 'I played a key role in supporting Dhangadhi Sub-Metropolitan City in the establishment of its Municipal Emergency Operation Center (MEOC). This involved coordinating with various stakeholders, setting up necessary infrastructure, and ensuring the MEOC was functional for effective disaster preparedness and response. My contributions included technical guidance on information management systems and training personnel for operational readiness. The MEOC now serves as a central hub for coordinating emergency efforts, significantly enhancing the city\'s capacity to manage and respond to crises. This experience demonstrates my ability to facilitate complex institutional development projects in challenging environments.',
                    additionalImages: [
                        'https://placehold.co/600x400/FF9900/FFFFFF?text=MEOC+Detail+1',
                        'https://placehold.co/600x400/FF9900/FFFFFF?text=MEOC+Detail+2',
                        'https://placehold.co/600x400/FF9900/FFFFFF?text=MEOC+Detail+3'
                    ]
                },
                {
                    id: 'risk-vulnerability-maps',
                    name: 'Risk, Vulnerability, and Capacity Maps',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/00CCFF/FFFFFF?text=Risk+Maps+Thumbnail',
                    fullDescription: 'I prepared a series of 8 risk, vulnerability, and capacity maps that were strategically installed in community locations and 24 GIS maps for the atlas map book of action wards in Dhangadhi Sub-Metropolitan City. These maps provided critical visual information for local communities and authorities, helping them understand potential hazards, identify vulnerable populations, and assess existing capacities for disaster response. The process involved detailed spatial analysis, community participation, and high-quality cartographic design to ensure the maps were both informative and accessible. These maps serve as vital tools for disaster risk reduction education and planning at the grassroots level.',
                    additionalImages: [
                        'https://placehold.co/600x400/00CCFF/FFFFFF?text=Risk+Maps+Detail+1',
                        'https://placehold.co/600x400/00CCFF/FFFFFF?text=Risk+Maps+Detail+2',
                        'https://placehold.co/600x400/00CCFF/FFFFFF?text=Risk+Maps+Detail+3',
                        'https://placehold.co/600x400/00CCFF/FFFFFF?text=Risk+Maps+Detail+4',
                        'https://placehold.co/600x400/00CCFF/FFFFFF?text=Risk+Maps+Detail+5'
                    ]
                }
            ]
        },
        {
            date: 'Feb 2020 – April 2022',
            title: 'Senior Geospatial Analyst',
            institution: 'I.T. Maps and Consultant Pvt. Ltd., Baniyatar, Tokha Municipality - 8, Kathmandu',
            supervisor: 'Er. Pradip Raj Paudel, Chief Technical Officer',
            achievements: [
                'Worked on projects, scoping out the nature and purpose of the information required by clients',
                'Undertook desk-based data capture (digitizing) to convert paper maps to GIS dataset',
                'Trained IT Officers and Engineers from 75 local governments of Gandaki Province in 2021 on GIS and Web Mapping in co-ordination with Office of the Prime Minister & Council of Ministers of Gandaki Province.',
                'Drone Survey and Preparation of Topographic Map for Rapti River in Sauraha Chitwan for Flood Modelling in coordination with INK Consultancy',
                'Open Space Mapping in Ward no. 2 and 10 and Evacuation Route Mapping of Slum Area of Aaptari using Drone Based Survey in Urban DRR project of UNDP',
                'Development of Mobile Based Data Collection Tool for Data Collection in Fedikhola Rural Municipality',
                'Designed and Developed Resource Mapping of Fedikhola Rural Municipality proposed for planning purpose along with preparation of geodatabase.',
                'Drone Survey and Feasibility Study of Monorail, Park in Sankhu in Shankharapur Municipality.',
                'Drone Survey in Ruby Valley to identify proper area of Ruby in Dhanding',
                'Drone Survey, Preparation of geodatabase and House Numbering in Tilottama Municipality of Rupandehi',
                'Mapping of Roads in Biratnagar Metropolitan City and geodatabase preparation.',
                'Trained several locals and government stakeholders from Bajhang and Humla in OSM and Field based GPS-Survey',
                'Led GIS and OpenStreetMap Mapping for Emergency Preparedness and Response (Bajhang district) implemented by WFP Nepal.',
                'Drone Survey of Hasuliya and feasibility study for establishment of Hospital in Kailari Rural Municipality in Kailali.',
                'Drone Survey and Preparation of topographical map of Lumbini party palace in Rupandehi for Feasibility Study of establishment area.',
                'Drone Survey and GIS based Topographical Mapping in Hokse of Panchal Municipality for Establishment of Green Industrial Village.',
                'Led team of Civil Engineers for Initial Environmental Assessment in Hokse of Panchkhal for Establishment of Green Industrial Village.'
            ],
            sampleWorks: [
                {
                    id: 'rapti-river-map',
                    name: 'Topographic Map for Rapti River',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/FF66B2/FFFFFF?text=Rapti+Map+Thumbnail',
                    fullDescription: 'I conducted a detailed drone survey and prepared a high-resolution topographic map for the Rapti River in Sauraha, Chitwan. This map was essential for flood modeling in coordination with INK Consultancy, providing critical elevation and terrain data necessary for accurate flood prediction and mitigation planning. The project involved advanced photogrammetry techniques to create precise spatial data, which directly contributed to environmental management and disaster preparedness efforts in the region. This work demonstrates my expertise in aerial surveying and the application of geospatial data for hydrological analysis and risk assessment.',
                    additionalImages: [
                        'https://placehold.co/600x400/FF66B2/FFFFFF?text=Rapti+Map+Detail+1',
                        'https://placehold.co/600x400/FF66B2/FFFFFF?text=Rapti+Map+Detail+2',
                        'https://placehold.co/600x400/FF66B2/FFFFFF?text=Rapti+Map+Detail+3'
                    ]
                },
                {
                    id: 'urban-drr-map',
                    name: 'Open Space Mapping (Urban DRR)',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/9966FF/FFFFFF?text=Open+Space+Map+Thumbnail',
                    fullDescription: 'As part of an Urban Disaster Risk Reduction (DRR) project with UNDP, I led the open space mapping initiative in Ward No. 2 and 10 and evacuation route mapping of slum areas in Aaptari using drone-based surveys. Identifying accessible open spaces is crucial for safe evacuation and temporary shelter during disasters. My role involved collecting high-resolution aerial imagery, processing the data, and creating detailed maps that highlight these critical areas and evacuation routes. This project significantly contributed to enhancing urban resilience and ensuring the safety of vulnerable populations in densely populated areas. It showcases my proficiency in utilizing drone technology for critical urban planning and disaster preparedness.',
                    additionalImages: [
                        'https://placehold.co/600x400/9966FF/FFFFFF?text=Open+Space+Map+Detail+1',
                        'https://placehold.co/600x400/9966FF/FFFFFF?text=Open+Space+Map+Detail+2'
                    ]
                }
            ]
        },
        {
            date: 'March 2020 – May 2022',
            title: 'GIS Analyst',
            institution: 'NAXA Pvt. Ltd., Do Cha Marg, Maharajgunj-3, Kathmandu',
            supervisor: 'Mr. Uttam Pudasaini, Managing Director (NAXA Pvt. Ltd.)',
            achievements: [
                'Oversaw GIS and web mapping projects and supported the team to accomplish project goals on time.',
                'Developed and enforced GIS standards for geodata management, map design and mobile & drone-based data collection activities, project work plans, determine resource requirements, plan, coordinate and oversee GIS related project activities to ensure on-time delivery.',
                'Developed curriculum and oversaw GIS and Web-based Mapping training to various technical and non-technical professionals.',
                'Supervised but also engaged team members, if needed, in mapping and spatial analysis using GIS software and other relevant available tools',
                'Prepared data and documents (technical proposals, reports and handover documents) as per the requirements of projects',
                'Trained and Led Enumerators from Dharche and Chumnubri Rural Municipality of Gorkha for mobile based data collection and Preparation of GIS based map for 5 years Planning.',
                'Actively communicated with clients and partner organizations and maintain a good coordination between the clients and the team',
                'Led data collection and mapping activities for preparation of capacity, risk and hazard maps of Bhimeshwor and Bharatpur for UNDP project',
                'Trained several locals from Humla in OSM and Field based GPS-Survey.',
                'Led GIS and OpenStreetMap Mapping for Emergency Preparedness and Response (Humla district) implemented by WFP Nepal.',
                'Supervised the research on suitability analysis for large scale solar plant installation throughout the country taking landuse, slope, aspect, irradiance and electric sub-stations into account',
                'Supervised the preparation of socio-economic atlas map book of Sudoorpaschim Province for Ministry of Land Management, Agriculture and Cooperative',
                'Facilitate to sensitize the municipal officers on importance of open space and open space mapping as well as web based platforms, conducted drone survey, GIS mapping and geodatabase preparation of identified open spaces for Identification of open space project implemented by IOM- UN Migration in Kathmandu valley and five municipalities outside Kathmandu valley',
                'Supervised the digitalization and preparation of VCA maps during flood at Saptari Triyuga River implemented by DCA Nepal.',
                'Led Team of Web Development and Mobile Development in preparation of Mobile based Application to collect the street light locations and Lead Lights on campaign in co-ordination with Youth Innovation Lab supported by Asian Foundation.',
                'Supported in co-ordination with national government in import and registration of drone in accordance with National Government Rules and Policies.',
                'Supported in Drone Survey and Visualization for “Status of Housing Reconstruction after Earthquake 2015” in Changunarayan Municipality.',
                'Supported in co-ordination mechanism with government for DrOTS (Drone Based Therapy System) in Pyuthan .',
                'Trained OSM and its implication in daily life to the participants from Practical Action to support for Landslide Susceptibility Mapping in Bajhang and Bajura.',
                'Conducted GIS and remote sensing training for officials of Geographic Information Infrastructure Division (NGIID), Survey Department',
                'Facilitated basic and advanced GIS training for ward officials of Kathmandu Metropolitan city ward no. 10,12 & 31 and Lalitpur Metropolitan City ward no. 2, 9 & 11',
                'Prepared ward level geodatabase, administrative maps, resource maps, risk and hazard maps of Kathmandu Metropolitan City ward no. 10,12 & 31 and Lalitpur Metropolitan City ward no.2, 9 & 11 for Surakshit Sahar (Safer City) project implemented by consortium of ADRA Nepal, DCA Nepal, LWR Nepal and World Vision International Nepal and ISET Nepal',
                'Supported in Maintenance of geospatial data in Geoportal of National Survey Department.'
            ],
            sampleWorks: [
                {
                    id: 'gis-web-mapping',
                    name: 'GIS and Web Mapping Projects',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/66FF99/FFFFFF?text=GIS+Project+Thumbnail',
                    fullDescription: 'At NAXA Pvt. Ltd., I oversaw numerous GIS and web mapping projects, ensuring timely completion and successful project goals. This included developing and enforcing GIS standards for geodata management, map design, and mobile/drone-based data collection activities. I created project work plans, determined resource requirements, and coordinated all GIS-related activities. My role also involved developing curricula and delivering training on GIS and web-based mapping to various technical and non-technical professionals. I supervised team members in mapping and spatial analysis, prepared technical proposals, reports, and handover documents, and actively communicated with clients to maintain strong coordination. This comprehensive experience highlights my leadership in geospatial project management and my commitment to delivering high-quality, impactful solutions.',
                    additionalImages: [
                        'https://placehold.co/600x400/66FF99/FFFFFF?text=GIS+Project+Detail+1',
                        'https://placehold.co/600x400/66FF99/FFFFFF?text=GIS+Project+Detail+2',
                        'https://placehold.co/600x400/66FF99/FFFFFF?text=GIS+Project+Detail+3',
                        'https://placehold.co/600x400/66FF99/FFFFFF?text=GIS+Project+Detail+4',
                        'https://placehold.co/600x400/66FF99/FFFFFF?text=GIS+Project+Detail+5',
                        'https://placehold.co/600x400/66FF99/FFFFFF?text=GIS+Project+Detail+6'
                    ]
                },
                {
                    id: 'undp-capacity-maps',
                    name: 'Capacity, Risk and Hazard Maps (UNDP)',
                    link: '#',
                    imageUrl: 'https://placehold.co/400x200/FF3333/FFFFFF?text=UNDP+Map+Thumbnail',
                    fullDescription: 'I led data collection and mapping activities for preparing capacity, risk, and hazard maps for Bhimeshwor and Bharatpur under a UNDP project. This involved extensive fieldwork, community engagement, and sophisticated spatial analysis to accurately identify and represent areas of vulnerability and resilience. These maps are critical tools for local disaster preparedness and response planning, providing visual insights into potential threats and community strengths. My role also included training locals in OpenStreetMap and field-based GPS-surveying in Humla, enhancing local capacity for data collection and mapping. This project underlines my expertise in developing actionable geospatial products for humanitarian and development initiatives.',
                    additionalImages: [
                        'https://placehold.co/600x400/FF3333/FFFFFF?text=UNDP+Map+Detail+1',
                        'https://placehold.co/600x400/FF3333/FFFFFF?text=UNDP+Map+Detail+2'
                    ]
                }
            ]
        }
    ],
    skills: {
        technical: [
            'ArcGIS/ ArcGIS Pro', 'QGIS for Mapping and Cartography', 'IBM/SPSS',
            'Drone Piloting and Photogrammetry (Pix4D, Pix4D React)', 'Python for Geospatial Analysis',
            'Remote Sensing', 'Hydrological Modelling using HEC RAS', 'Adobe Illustrator',
            'KOBO Toolbox and ODK Related Data Collection Software', 'Microsoft Office Package',
            'Experience in Using Information Management Systems', 'Data Analysis and Visualization using Excel and its Plugins',
            'PostgreSQL, MySQL for SQL', 'Microsoft PowerBI', 'Open Softwares as JOSM, Maps.Me, OSMAnd, GPS Tracker',
            'OpenStreetMap', '3D modelling', 'Hazard Modeeling and Mapping',
            'Surveying (Topographic Surveying using instruments as Total Station, Level Machine, theodolite, and other)',
            'Disaster Preparedness, Management and Response'
        ],
        social: [
            'Ability to work with diverse communities maintaining neutral principle',
            'Willingness to work in rural environments',
            'Enthusiasm for volunteering',
            'Ability to work and co-ordinate with local government under any circumstances',
            'Ability to work with any social communities.'
        ],
        computerInternet: [
            'Fully competent in using Microsoft Office (Word, Excel and PowerPoint)',
            'Fully competent on computer filing and documentation system',
            'Fully competent in navigating Internet for all program related purposes'
        ],
        languages: [
            { name: 'Nepali', proficiency: 'Mother Tongue' },
            { name: 'English', proficiency: 'C1 Proficient User' },
            { name: 'Hindi', proficiency: 'B2 Independent user' }
        ]
    },
    trainings: {
        attended: [
            { name: 'MC, RJ, Public Speaking and News Writing Training', conductedBy: 'Anupam Recordings', location: 'Pokhara, Nepal', duration: '7 days, 2016' },
            { name: 'Training on Quantitative and Qualitative Research Skill', conductedBy: 'Asian Foundation', location: 'Kathmandu, Nepal', duration: '6 days, 2019' },
            { name: 'Responsible Data Management in Emergencies', conductedBy: 'Save the Children', location: 'Kathmandu, Nepal', duration: '8 hrs, 2023' },
            { name: 'Training on GEDSI in Disaster', conductedBy: 'SUPER Project( UNDP, UNICEF, UN Women)', location: 'Birendranagar, Nepal', duration: '2 days, 2023' },
            { name: 'Anti-fraud e-learning: Fraud and Corruption Awareness and Prevention', conductedBy: 'Online', location: '', duration: '' },
            { name: 'Greening the Blue', conductedBy: 'Online', location: '', duration: '' },
            { name: 'Preventing Sexual Harassment and other Prohibited Conduct', conductedBy: 'Online', location: '', duration: '' },
            { name: 'Prevention of Sexual Exploitation and Abuse of the Local Population (PSEA)', conductedBy: 'Online', location: '', duration: '' },
            { name: 'The Gender Journey', conductedBy: 'Online', location: '', duration: '' },
            { name: 'Responsible Data Management in Emergencies', conductedBy: 'Online', location: '', duration: '' },
            { name: 'Foundation of Project management', conductedBy: 'Online', location: '', duration: 'March 29, 2024' },
            { name: 'Agile Project Management – The Scrum Method', conductedBy: 'Online', location: '', duration: 'March 20, 2024' },
            { name: 'Earth Observation and GIS to Support the United Nations Sustainable Development Goals', conductedBy: 'Online', location: '', duration: 'February 03, 2024' },
            { name: 'Foundation of Project Management (by Google)', conductedBy: 'Online', location: '', duration: 'March 29, 2024' },
            { name: 'Preparing Data for Analysis with Microsoft Excel (By Microsoft)', conductedBy: 'Online', location: '', duration: 'April 2, 2024' },
            { name: 'Harnessing the Power of Data with Power BI (By Microsoft)', conductedBy: 'Online', location: '', duration: 'April 9, 2024' },
            { name: 'Extract, Transform and Load Data in Power BI (By Microsoft)', conductedBy: 'Online', location: '', duration: 'June 13, 2025' }
        ],
        delivered: [
            '6 days Training on GIS and Web Mapping to IT Officers and Engineers of 75 local government of Gandaki Province supported by OPMCM Gandaki.',
            '3 days Drone Training for Disaster Preparedness and Response in Sudupashchim Province',
            '3 days Drone Training for Disaster Preparedness and Response in Karnali Province',
            '2 days training on use of Mobile based software (KOBO toolbox) for Spatial Data Collection in Dharche Rural Municipality and Chumnubri Rural Municipality.',
            '1 day Training on OpenStreetMap to participants from Practical Action.',
            '3 days training on data collection and OSM mapping to locals in Bajhang and Humla supported by WFP Nepal',
            'Vulnerability and Capacity Assessment and Participatory Mapping of Hazards in Shankharapur Municipality with the involvement of stakeholders from local government.',
            'Open Map Literacy to students of more than 10 schools in Pokhara.',
            'Participatory Mapping with the involvement of local people and sevral stakeholders in more than 10 municipalities of Nepal',
            'QGIS Training to students of Pashchimanchal Campus',
            'Cartographic Trainings to interns and juniors in several organizations during work hours.',
            'Trained Nepal Police Officers from 7 working Areas of Security and Justice Programme for use of spatial location and Community GIS Tool.'
        ]
    },
    research: [
        '“3D Mapping and Modelling of Western Region Campus using ESRI CityEngine”, Pashchimanchal Campus - 2018'
    ],
    travel: {
        asia: ['India'],
        nepal: '48 districts (out of 77) travelled for field assessment, planning and project implementation'
    },
    references: [
        { name: 'Mr. Abinash Aryal', position: 'Managing Director', organization: 'Oasis Engineering Services Pvt. Ltd.', contact: '+977 9857083377', email: 'abinash.oasis@gmail.com', relation: 'Line Manager in Oasis.' },
        { name: 'Mr Siddhartha Sharma', position: 'National Project Coordinator', organization: 'UNDP/SUPER', contact: '+977-9851010393', email: 'siddhartha.sharma@undp.org', relation: 'My line manager UNDP//SUPER.' },
        { name: 'Mr. Uttam Pudasaini', position: 'Managing Director', organization: 'NAXA Pvt. Ltd.', contact: '+977-9851216126', email: 'uttam@naxa.com.np', relation: 'My supervisor during my period in Naxa.' }
    ]
};

// Functional component for the navigation bar
const Navbar = ({ setActiveSection }) => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg rounded-b-lg">
            <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
                <h1 className="text-white text-2xl font-bold mb-2 md:mb-0">Aashish Sharma</h1>
                <div className="flex flex-wrap space-x-4">
                    <NavItem section="home" label="Home" setActiveSection={setActiveSection} />
                    <NavItem section="academic" label="Education" setActiveSection={setActiveSection} />
                    <NavItem section="experience" label="Experience" setActiveSection={setActiveSection} />
                    <NavItem section="skills" label="Skills" setActiveSection={setActiveSection} />
                    <NavItem section="trainings" label="Trainings" setActiveSection={setActiveSection} />
                    <NavItem section="sample-works" label="Sample Works" setActiveSection={setActiveSection} />
                    <NavItem section="contact" label="Contact" setActiveSection={setActiveSection} />
                </div>
            </div>
        </nav>
    );
};

// Helper component for individual navigation items
const NavItem = ({ section, label, setActiveSection }) => (
    <button
        onClick={() => setActiveSection(section)}
        className="text-white hover:bg-white hover:text-blue-700 px-4 py-2 rounded-full transition duration-300 ease-in-out font-medium"
    >
        {label}
    </button>
);

// Functional component for the Home section
const HomeSection = ({ personal }) => {
    return (
        <section id="home" className="py-12 bg-white rounded-lg shadow-xl text-center flex flex-col items-center">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                        <img
                            src={personal.profileImage}
                            alt="Aashish Sharma"
                            className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-blue-200"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/cccccc/333333?text=Photo'; }}
                        />
                    </div>
                    <div className="text-left">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Namaste! I'm Aashish Sharma</h2>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            A highly motivated and experienced Geomatics Engineer with a proven track record in Geographic Information Systems (GIS), Remote Sensing, and Spatial Data Management. I specialize in leveraging geospatial technologies for problem-solving, disaster preparedness, urban planning, and environmental management. My expertise extends to drone piloting, data analysis, and leading impactful projects across various sectors.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a href={`mailto:${personal.email}`} className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Email Me
                            </a>
                            <a href={`tel:${personal.mobile}`} className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Functional component for the Academic section
const AcademicSection = ({ academic }) => (
    <section id="academic" className="py-12 bg-gray-50 rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Academic Qualification</h2>
            {academic.map((edu, index) => (
                <div key={index} className="bg-white p-8 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-blue-700 mb-2">{edu.level}</h3>
                    <p className="text-gray-600 mb-1"><strong>Institute:</strong> {edu.institute}</p>
                    <p className="text-gray-600 mb-1"><strong>Duration:</strong> {edu.duration}</p>
                    <p className="text-gray-600 mb-4"><strong>Grade:</strong> {edu.grade}</p>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Subjects / Skills:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 list-disc list-inside text-gray-700">
                        {edu.skills.map((skill, i) => (
                            <li key={i} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

// Functional component for the Experience section
const ExperienceSection = ({ experience }) => (
    <section id="experience" className="py-12 bg-white rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Professional Experience</h2>
            <div className="relative border-l-4 border-blue-500 ml-4 md:ml-8">
                {experience.map((exp, index) => (
                    <div key={index} className="mb-10 ml-6 relative">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1.5 border-2 border-white shadow-md"></div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-1">{exp.title}</h3>
                        <p className="text-gray-800 font-semibold mb-1">{exp.institution}</p>
                        <p className="text-gray-600 text-sm mb-2">{exp.date}</p>
                        <p className="text-gray-600 mb-4">Supervisor: {exp.supervisor}</p>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                        {exp.sampleWorks && exp.sampleWorks.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Sample Works:</h4>
                                <div className="flex flex-wrap gap-3">
                                    {exp.sampleWorks.map((work, i) => (
                                        // This link will now trigger the ProjectDetailSection
                                        <button
                                            key={i}
                                            onClick={() => setActiveSection('project-detail', work)} // Will pass the work object
                                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-200 transition duration-300 cursor-pointer"
                                        >
                                            {work.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Functional component for the Skills section
const SkillsSection = ({ skills }) => (
    <section id="skills" className="py-12 bg-gray-50 rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Skills and Competencies</h2>

            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.technical.map((skill, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Social Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {skills.social.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Computer and Internet Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {skills.computerInternet.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Language Proficiency</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                    Language
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                    Proficiency
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {skills.languages.map((lang, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {lang.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {lang.proficiency}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
);

// Functional component for the Trainings section
const TrainingsSection = ({ trainings }) => (
    <section id="trainings" className="py-12 bg-white rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Trainings and Workshops</h2>

            <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-5">Trainings Attended</h3>
                <div className="relative border-l-4 border-blue-500 ml-4 md:ml-8">
                    {trainings.attended.map((training, index) => (
                        <div key={index} className="mb-8 ml-6 relative">
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1.5 border-2 border-white shadow-md"></div>
                            <p className="text-lg font-semibold text-gray-900">{training.name}</p>
                            <p className="text-gray-700 text-sm">Conducted by: {training.conductedBy}</p>
                            {training.location && <p className="text-gray-700 text-sm">Location: {training.location}</p>}
                            {training.duration && <p className="text-gray-700 text-sm">Duration: {training.duration}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-5">Trainings/Workshops Delivered and Facilitated</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4">
                    {trainings.delivered.map((training, index) => (
                        <li key={index} className="text-lg">{training}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

// Functional component for the Sample Works section
const SampleWorksSection = ({ experience, research, setActiveSection, setSelectedProjectDetails }) => {
    // Flatten all sample works from all experience entries into a single array
    const allSampleWorks = experience.flatMap(exp => exp.sampleWorks || []);

    const handleProjectClick = (project) => {
        setSelectedProjectDetails(project); // Set the details of the clicked project
        setActiveSection('project-detail'); // Navigate to the project detail view
    };

    return (
        <section id="sample-works" className="py-12 bg-gray-50 rounded-lg shadow-xl px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Sample Works & Projects</h2>
                {allSampleWorks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allSampleWorks.map((work, index) => (
                            <button
                                key={index}
                                onClick={() => handleProjectClick(work)} // Use a button for click interaction
                                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 text-left cursor-pointer"
                            >
                                {work.imageUrl && ( // Conditionally render image if imageUrl exists
                                    <img
                                        src={work.imageUrl}
                                        alt={work.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/cccccc/333333?text=Project+Image'; }}
                                    />
                                )}
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">{work.name}</h3>
                                <p className="text-gray-600">Click for more details</p>
                                <div className="mt-4 text-blue-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View Project
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">No specific sample works linked yet. Please update your CV with links!</p>
                )}
                 <div className="mt-10">
                    <h3 className="text-2xl font-bold text-blue-700 mb-5">Research, Publication and Editing</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {research.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

// New Functional component for displaying individual project details
const ProjectDetailSection = ({ project, setActiveSection }) => {
    if (!project) {
        return (
            <div className="text-center py-12 bg-white rounded-lg shadow-xl px-4">
                <p className="text-gray-600 text-lg">No project selected.</p>
                <button
                    onClick={() => setActiveSection('sample-works')}
                    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Back to Sample Works
                </button>
            </div>
        );
    }

    // Function to handle image error fallback for additional images
    const handleImageError = (e) => {
        e.target.onerror = null; // Prevent infinite loop
        e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; // Fallback placeholder
    };

    return (
        <section id="project-detail" className="py-12 bg-white rounded-lg shadow-xl px-4">
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={() => setActiveSection('sample-works')}
                    className="mb-8 flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Sample Works
                </button>

                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center border-b-2 border-blue-500 pb-3">
                    {project.name}
                </h2>

                {project.imageUrl && ( // Display thumbnail if available
                    <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full max-h-96 object-contain rounded-lg mb-8 shadow-md"
                        onError={handleImageError}
                    />
                )}

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {project.fullDescription}
                </p>

                {project.additionalImages && project.additionalImages.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-blue-700 mb-4">Additional Photos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.additionalImages.map((imgSrc, index) => (
                                <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={imgSrc}
                                        alt={`${project.name} - Image ${index + 1}`}
                                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                                        onError={handleImageError}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-center mt-10">
                    <button
                        onClick={() => setActiveSection('sample-works')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Return to Projects
                    </button>
                </div>
            </div>
        </section>
    );
};


// Main App Component
const App = () => {
    // State to manage the active section for navigation
    const [activeSection, setActiveSection] = useState('home');
    // State to hold the details of the currently selected project for the detail page
    const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

    // Render the active section based on the state
    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return <HomeSection personal={profileData.personal} />;
            case 'academic':
                return <AcademicSection academic={profileData.academic} />;
            case 'experience':
                return <ExperienceSection experience={profileData.experience} />;
            case 'skills':
                return <SkillsSection skills={profileData.skills} />;
            case 'trainings':
                return <TrainingsSection trainings={profileData.trainings} />;
            case 'sample-works':
                // Pass setSelectedProjectDetails to SampleWorksSection so it can update the state
                return <SampleWorksSection
                            experience={profileData.experience}
                            research={profileData.research}
                            setActiveSection={setActiveSection}
                            setSelectedProjectDetails={setSelectedProjectDetails}
                        />;
            case 'project-detail':
                // Render the ProjectDetailSection with the selected project's data
                return <ProjectDetailSection
                            project={selectedProjectDetails}
                            setActiveSection={setActiveSection}
                        />;
            case 'contact':
                return <ContactSection personal={profileData.personal} references={profileData.references} />;
            default:
                return <HomeSection personal={profileData.personal} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-900 antialiased">
            {/* Global styles for body and custom scrollbar */}
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                /* Custom scrollbar for better aesthetics */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
                `}
            </style>

            {/* Navigation Bar */}
            <Navbar setActiveSection={setActiveSection} />

            {/* Main content area */}
            <main className="container mx-auto p-4 md:p-8 mt-6">
                {renderSection()}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-6 text-center mt-10 rounded-t-lg shadow-inner">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Aashish Sharma. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Built with React and Tailwind CSS
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
