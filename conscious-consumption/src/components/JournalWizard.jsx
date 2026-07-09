import { useState } from "react";
import "../styles/JournalWizard.css"
import { IoClose } from "react-icons/io5";
function JournalWizard({ appsUsed, screenTime,close }) {

    const apps = appsUsed.slice(0, 3)
    const [journal, setJournal] = useState({
        date: new Date().toISOString(),

        appsUsed,

        screenTime,

        reflection: "",

        productivity: 3,

        tags: []
    });

    const positiveTags = [
        "😊 Happy",
        "😌 Relaxed",
        "⚡ Energetic",
        "🎯 Focused",
        "📚 Productive",
        "💪 Motivated",
        "🤩 Excited",
        "🙏 Grateful",
        "😄 Enjoyed",
        "😁 Good"
    ];

    const negativeTags = [
        "😔 Sad",
        "😤 Stressed",
        "😰 Nervous",
        "😵 Overwhelmed",
        "💭 Distracted",
        "😴 Tired",
        "😞 Moody",
        "😠 Frustrated",
        "😕 Confused",
        "😣 Anxious"
    ];

    const toggleTag = (tag) => {

        if (journal.tags.includes(tag)) {

            setJournal({
                ...journal,
                tags: journal.tags.filter((t) => t !== tag)
            });

        } else {

            setJournal({
                ...journal,
                tags: [...journal.tags, tag]
            });

        }

    };
    return (

        <>
            <div className="wizard-overlay">
                <div className="wizard-card journal-card">
                    <h3 id="new">New Journal</h3>
                    <button
                        className="close-btn"
                        onClick={close}
                    >
                        <IoClose />
                    </button>
                    <div className="top">
                        <h3>{new Date().toLocaleDateString()}</h3>
                        <div className="apps-used">
                            <span>Apps used</span>

                            {apps.map((app) => (
                                <span key={app.name} className="journal-app-icon">
                                    {app.icon}
                                </span>
                            ))}
                            {appsUsed.length > 3 && (
                                <span>+{appsUsed.length - 3}</span>
                            )}
                        </div>
                        <h3>{screenTime.hours} h {screenTime.minutes} m</h3>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <h3>Reflection</h3>
                        <textarea

                            value={journal.reflection}

                            rows={10}
                            cols={40}

                            onChange={(e) =>

                                setJournal({
                                    ...journal,
                                    reflection: e.target.value
                                })

                            }

                        />
                        <h3>
                            Productivity ({journal.productivity}/5)
                        </h3>
                        <input

                            type="range"

                            min="0"

                            max="5"

                            value={journal.productivity}

                            onChange={(e) =>

                                setJournal({
                                    ...journal,
                                    productivity: Number(e.target.value)
                                })

                            }

                        />

                        <div className="tags-section">

                            <h3>Tags</h3>

                            <div className="tag-group">

                                <p>Positive</p>

                                <div className="tags">

                                    {positiveTags.map((tag) => (

                                        <button
                                            type="button"
                                            key={tag}
                                            className={
                                                journal.tags.includes(tag)
                                                    ? "tag selected-tag"
                                                    : "tag"
                                            }
                                            onClick={() => toggleTag(tag)}
                                        >
                                            {tag}
                                        </button>

                                    ))}

                                </div>

                            </div>

                            <div className="tag-group">

                                <p>Negative</p>

                                <div className="tags">

                                    {negativeTags.map((tag) => (

                                        <button
                                            type="button"
                                            key={tag}
                                            className={
                                                journal.tags.includes(tag)
                                                    ? "tag selected-tag"
                                                    : "tag"
                                            }
                                            onClick={() => toggleTag(tag)}
                                        >
                                            {tag}
                                        </button>

                                    ))}

                                </div>

                            </div>

                        </div>

                        <div className="journal-buttons">

                            <button
                                type="button"
                                className="analysis-btn"
                            >
                                Analyze ✨
                            </button>

                            <button
                                type="submit"
                                className="save-btn"
                            >
                                Save
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default JournalWizard