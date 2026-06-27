import { useState } from 'react'
import '../styles/MyJournals.css'
import AppsWizard from './AppsWizard'
function MyJournals(){
    const [appsUsedWizard, setAppsUsedWizard]=useState(false)
    return(
        <>
        <div className="upper">
            <h2>My Journals</h2>
            <button onClick={()=> setAppsUsedWizard(true)}>+ New Journal</button>
        </div>
        {appsUsedWizard && (
        <AppsWizard
          close={() => setAppsUsedWizard(false)}
        />
      )}
        </>
    )
}

export default MyJournals