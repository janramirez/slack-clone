import { Add, Apps, BookmarkBorder, CreateOutlined, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import db from './firebase';


function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => { 
    // run code when component loads
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(snapshot.docs.map(doc=> ({
        id: doc.id,
        name: doc.data().name
      }))
      )
    ));
   },[])

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>

        <div className='sidebar__info'>
          <h2>Sidebar section header</h2>
          <h3>
            <FiberManualRecord />
            PlaceHolder
          </h3>
        </div>
        < CreateOutlined />
      </div>
      < SidebarOption Icon={InsertComment} title="Threads"/>
      < SidebarOption Icon={Inbox} title="Mentions & reactions"/>
      < SidebarOption Icon={Drafts} title="Saved items"/>
      < SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
      < SidebarOption Icon={PeopleAlt} title="People & user groups"/>
      < SidebarOption Icon={Apps} title="Apps"/>
      < SidebarOption Icon={FileCopy} title="File browser"/>
      < SidebarOption Icon={ExpandLess} title="Show less"/>
      <hr/>
      < SidebarOption Icon={ExpandMore} title="Channels"/>
      <hr/>
      < SidebarOption Icon={Add} addChannelOption title="Add Channel"/>
      
      {/* Connect to db */}
      {channels.map(channel => (
        < SidebarOption title={channel.name} id={channel.id} />
      ))}


    </div>
  )
}

export default Sidebar