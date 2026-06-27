import { useState } from "react";
import "../styles/AppsWizard.css";

import {
    SiNotion,
    SiGmail,
    SiGooglecalendar,
    SiGoogledocs,
    SiInstagram,
    SiWhatsapp,
    SiFacebook,
    SiTelegram,
    SiYoutube,
    SiNetflix,
    SiSpotify,
    SiFlipkart,
    SiGooglepay,
    SiPaytm,
    SiDiscord,
    SiOpenai,
    SiGoogle,
    SiTwitch
} from "react-icons/si";

import { FaChrome, FaAmazon } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const appCategories = [
    {
        category: "Productivity",
        apps: [
            { name: "Notion", icon: <SiNotion size={38} /> },
            { name: "Gmail", icon: <SiGmail size={38} /> },
            { name: "Calendar", icon: <SiGooglecalendar size={38} /> },
            { name: "Docs", icon: <SiGoogledocs size={38} /> },
            { name: "ChatGPT", icon: <SiOpenai size={38} color="#10A37F" /> },
            { name: "Google", icon: <FcGoogle size={38}/> },
        ]
    },

    {
        category: "Social",
        apps: [
            { name: "Instagram", icon: <SiInstagram size={38} color="#E1306C" /> },
            { name: "WhatsApp", icon: <SiWhatsapp size={38} color="#25D366" /> },
            { name: "Facebook", icon: <SiFacebook size={38} color="#1877F2" /> },
            { name: "Telegram", icon: <SiTelegram size={38} color="#2AABEE" /> },
            { name: "Discord", icon: <SiDiscord size={38} color="#5865F2" /> }
        ]
    },

    {
        category: "Entertainment",
        apps: [
            { name: "YouTube", icon: <SiYoutube size={38} color="red" /> },
            { name: "Netflix", icon: <SiNetflix size={38} color="#E50914" /> },
            { name: "Spotify", icon: <SiSpotify size={38} color="#1DB954" /> },
            { name: "Prime Video", icon: <FaAmazon size={38} color="#00A8E1" /> },
            { name: "Twitch", icon: <SiTwitch size={38} color="#9146FF" /> }
        ]
    },

    {
        category: "Shopping",
        apps: [
            
            { name: "Flipkart", icon: <SiFlipkart size={38} color="#2874F0" /> }
        ]
    },

    {
        category: "Finance",
        apps: [
            { name: "Google Pay", icon: <SiGooglepay size={38} /> },
            { name: "Paytm", icon: <SiPaytm size={38} color="#00BAF2" /> }
        ]
    },

    {
        category: "Others",
        apps: [
            { name: "Chrome", icon: <FaChrome size={38}  /> },
            { name: "Maps", icon: <FcGoogle size={38} /> }
        ]
    }
];

function AppsWizard({ close }) {

    const [selectedApps, setSelectedApps] = useState([]);

    const toggleApp = (app) => {

        if (selectedApps.includes(app)) {
            setSelectedApps(selectedApps.filter((a) => a !== app));
        } else {
            setSelectedApps([...selectedApps, app]);
        }

    };

    return (

        <div className="wizard-overlay">

            <div className="wizard-card">

                <h2>Apps Used Today</h2>

                <p className="subtitle">
                    Select all the apps you used today.
                </p>

                {appCategories.map((section) => (

                    <div key={section.category}>

                        <h3>{section.category}</h3>

                        <div className="apps-grid">

                            {section.apps.map((app) => (

                                <div
                                    key={app.name}
                                    className={`app-card ${
                                        selectedApps.includes(app.name)
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() => toggleApp(app.name)}
                                >

                                    {selectedApps.includes(app.name) && (
                                        <div className="tick">✓</div>
                                    )}

                                    <div className="icon">
                                        {app.icon}
                                    </div>

                                    <p>{app.name}</p>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

                <div className="wizard-buttons">

                    <button className="cancel-btn" onClick={close}>
                        Cancel
                    </button>

                    <button className="next-btn">
                        Next →
                    </button>

                </div>

            </div>

        </div>

    );
}

export default AppsWizard;