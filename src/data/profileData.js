const profileData = {
    personal: {
        name: 'Aashish Sharma',
        address: 'Shreejanshil Tole, Tokha Municipality, Ward no. 8, Nepal',
        mobile: '+977-9843600401',
        email: 'itsaabhaas@gmail.com',
        dob: '18-01-1997',
        nationality: 'Nepali',
        profileImage: 'https://placehold.co/200x200/007bff/ffffff?text=Your+Photo' // Placeholder for profile image
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
                { name: 'Community GIS Tool (CGIST)', link: '#' }, // Placeholder link
                { name: 'Security and Justice Programme Maps', link: '#' } // Placeholder link
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
                { name: 'Kobo-Based School Assessment Tool', link: '#' },
                { name: 'GIS-based resource map for Aandhikhola Rural Municipality', link: '#' }
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
                { name: 'Municipal Emergency Operation Center (MEOC) Establishment', link: '#' },
                { name: 'Risk, Vulnerability, and Capacity Maps', link: '#' }
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
                { name: 'Topographic Map for Rapti River', link: '#' },
                { name: 'Open Space Mapping (Urban DRR)', link: '#' }
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
                { name: 'GIS and Web Mapping Projects', link: '#' },
                { name: 'Capacity, Risk and Hazard Maps (UNDP)', link: '#' }
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

export default profileData;