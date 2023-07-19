import React, { useEffect, useState } from 'react';
import { auth, firestore } from './firebase';

function Leads() {
const [leads, setLeads] = useState([]);

useEffect(() => {
const fetchLeads = async () => {
const leadsCollection = await firestore.collection('organizations').doc(auth.currentUser.uid).collection('leads').get();
setLeads(leadsCollection.docs.map(doc => doc.data()));
};

fetchLeads();
}, []);

return (
<div>
{leads.map((lead, index) => (
<div key={index}>
<p>{lead.firstName} {lead.lastName}</p>
</div>
))}
</div>
);
}

export default Leads;