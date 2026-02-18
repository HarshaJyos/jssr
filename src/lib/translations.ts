export type Language = "en" | "te";

export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact",
            bookNow: "Book Now",
        },
        hero: {
            greeting: "Namaskaram",
            title: "Jyosyabhatla Sundara Sitha Ramanjaneyulu",
            subtitle: "Vedic Priest & Spiritual Guide",
            description: "Preserving Sanatana Dharma through authentic Vedic rituals. Expert in Poojas, Homas, Vratas, and all Hindu ceremonies.",
            cta: "Request a Service",
        },
        about: {
            title: "About Me",
            description: "With years of dedicated practice in Vedic traditions, I specialize in conducting rituals with utmost devotion and adherence to sastras. My mission is to bring divine blessings to your home through authentic pooja sampradaya.",
            experience: "Years of Experience",
            rituals: "Rituals Conducted",
        },
        services: {
            title: "Divine Services",
            subtitle: "Authentic Vedic Rituals for Your Prosperity",
            items: [
                {
                    title: "Ganapathi Homam",
                    description: "Invoke Lord Ganesha to remove obstacles and ensure success in all endeavors.",
                },
                {
                    title: "Rudrabhishekam",
                    description: "Propitiate Lord Shiva for health, wealth, and removal of negative energies.",
                },
                {
                    title: "Satyanarayana Vratam",
                    description: "Perform this sacred vow for family prosperity and well-being.",
                },
                {
                    title: "Vastu Shanti",
                    description: "Purify your home and balance the energies for a peaceful living.",
                },
                {
                    title: "Navagraha Shanti",
                    description: "Pacify the nine planets to overcome doshas and bring good fortune.",
                },
                {
                    title: "Vivaham (Marriage)",
                    description: "Conducting traditional Vedic wedding ceremonies with all rituals.",
                },
                {
                    title: "Chandi Homam",
                    description: "A powerful ritual dedicated to Goddess Durga for removing obstacles and attaining success.",
                },
                {
                    title: "Surya Namaskaram",
                    description: "Salutations to the Sun God for health, vitality, and brilliance.",
                },
                {
                    title: "Other Subhakaryakramas",
                    description: "We perform all other auspicious ceremonies and rituals as per your requirement.",
                },
            ],
        },
        contact: {
            title: "Contact Me",
            subtitle: "Get in touch for consultations and bookings",
            form: {
                name: "Name",
                email: "Email",
                phone: "Phone Number",
                service: "Service Required",
                message: "Message",
                submit: "Send Request",
            },
        },
        footer: {
            rights: "All rights reserved.",
            description: "Dedicated to the service of Dharma.",
        },
    },
    te: {
        nav: {
            home: "ముఖపేజీ",
            about: "నా గురించి",
            services: "సేవలు",
            contact: "సంప్రదించండి",
            bookNow: "బుక్ చేసుకోండి",
        },
        hero: {
            greeting: "నమస్కారం",
            title: "జోశ్యభట్ల సుందర సీతారామాంజనేయులు",
            subtitle: "వేద పండితులు & పురోహితులు",
            description: "సనాతన ధర్మాన్ని, వైదిక సంప్రదాయాలను పాటిస్తూ, శాస్త్రోక్తంగా పూజలు, హోమాలు మరియు అన్ని శుభకార్యాలు నిర్వహించబడును.",
            cta: "సేవలను అభ్యర్థించండి",
        },
        about: {
            title: "నా గురించి",
            description: "వేద సంప్రదాయాలలో అపారమైన అనుభవంతో, పూర్తి నిష్టతో, శాస్త్రబద్ధంగా క్రతువులను నిర్వహించడంలో నేను ప్రత్యేకత కలిగి ఉన్నాను. మీ ఇంట దైవానుగ్రహం పొందడమే నా లక్ష్యం.",
            experience: "ఏళ్ల అనుభవం",
            rituals: "నిర్వహించిన క్రతువులు",
        },
        services: {
            title: "దైవ కార్యాలు",
            subtitle: "మీ శ్రేయస్సు కోసం వైదిక క్రతువులు",
            items: [
                {
                    title: "గణపతి హోమం",
                    description: "ఏ పనినైనా ప్రారంభించే ముందు విఘ్నాలు తొలగి, విజయం కలగడానికి గణపతి హోమం.",
                },
                {
                    title: "రుద్రాభిషేకం",
                    description: "ఆరోగ్యం, ఐశ్వర్యం మరియు సకల దోష నివారణకు పరమేశ్వరుని అభిషేకం.",
                },
                {
                    title: "సత్యనారాయణ వ్రతం",
                    description: "కుటుంబ శ్రేయస్సు మరియు సుఖసంతోషాల కోసం సత్యనారాయణ స్వామి వ్రతం.",
                },
                {
                    title: "వాస్తు శాంతి",
                    description: "గృహంలో శాంతి మరియు సానుకూల శక్తి కోసం వాస్తు పూజ.",
                },
                {
                    title: "నవగ్రహ శాంతి",
                    description: "గ్రహ దోషాల నివారణకు మరియు శుభ ఫలితాల కోసం నవగ్రహ శాంతి.",
                },
                {
                    title: "వివాహం",
                    description: "సంప్రదాయబద్ధంగా, వేద మంత్రాలతో వివాహ తంతు నిర్వహణ.",
                },
                {
                    title: "చండీ హోమం",
                    description: "శత్రు నాశనం, విజయం, మరియు సకల కార్య సిద్ధి కోసం అమ్మవారి అనుగ్రహం పొందే శక్తివంతమైన హోమం.",
                },
                {
                    title: "సూర్య నమస్కారాలు",
                    description: "ఆరోగ్యం, తేజస్సు మరియు దీర్ఘాయుష్షు కోసం సూర్య భగవానునికి ప్రత్యేక పూజలు.",
                },
                {
                    title: "ఇతర శుభకార్యక్రమములు",
                    description: "మీ అవసరాలకు అనుగుణంగా అన్ని ఇతర శుభకార్యాలు మరియు క్రతువులను మేము నిర్వహిస్తాము.",
                },
            ],
        },
        contact: {
            title: "సంప్రదించండి",
            subtitle: "శుభకార్యాల కోసం సంప్రదించండి",
            form: {
                name: "పేరు",
                email: "ఇమెయిల్",
                phone: "ఫోన్ నంబర్",
                service: "కావలసిన సేవ",
                message: "సందేశం",
                submit: "పంపండి",
            },
        },
        footer: {
            rights: "సర్వహక్కులు చట్టబద్ధమైనవి.",
            description: "ధర్మ రక్షణే మా ధ్యేయం.",
        },
    },
};
