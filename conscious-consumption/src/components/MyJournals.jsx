import { useState } from "react";
import "../styles/MyJournals.css";

import AppsWizard from "./AppsWizard";
import ScreenTimeWizard from "./ScreenTimeWizard";

function MyJournals() {

  const [showAppsWizard, setAppsUsedWizard] = useState(false);
  const [showScreenTimeWizard, setShowScreenTimeWizard] = useState(false);

  const [selectedApps, setSelectedApps] = useState([]);
  const [screenTime, setScreenTime] = useState(null);

  return (
    <>
      <div className="upper">
        <h2>My Journals</h2>

        <button onClick={() => setAppsUsedWizard(true)}>
          + New Journal
        </button>
      </div>

      {showAppsWizard && (

        <AppsWizard

          close={() => setAppsUsedWizard(false)}

          onNext={(apps) => {

            setSelectedApps(apps);

            setAppsUsedWizard(false);
            setShowScreenTimeWizard(true);

          }}

        />

      )}

      {showScreenTimeWizard && (

        <ScreenTimeWizard

          close={() => setShowScreenTimeWizard(false)}

          onBack={() => {

            setShowScreenTimeWizard(false);
            setAppsUsedWizard(true);

          }}

          onNext={(time) => {

            setScreenTime(time);

            setShowScreenTimeWizard(false);

            console.log(selectedApps);
            console.log(time);


          }}

        />

      )}

    </>
  );
}

export default MyJournals;