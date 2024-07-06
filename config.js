const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_28_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjY3ZzSHJrUDlOdmE1dFZIM0xaZXM5bDN5ZTVVTStCRFRuYXByTU1GeG9nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3bDhsaElvcFRLV3FCdXAzbEt3RU9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2OTNkYjNmLTE3OTktNDlhZi1hNzUxLTU3MjJiNDEzMjY0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxMDksXG4gICAgICA3MSxcbiAgICAgIDI0OCxcbiAgICAgIDUwLFxuICAgICAgMjE4LFxuICAgICAgMjQ1LFxuICAgICAgMTQzLFxuICAgICAgMTUxLFxuICAgICAgMTAyLFxuICAgICAgNjIsXG4gICAgICAxNjQsXG4gICAgICAyNDAsXG4gICAgICA0NixcbiAgICAgIDEwOSxcbiAgICAgIDQ0LFxuICAgICAgNDUsXG4gICAgICAxODEsXG4gICAgICAxMTgsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTIyLFxuICAgICAgMTI3LFxuICAgICAgMTMzLFxuICAgICAgMTU1LFxuICAgICAgMyxcbiAgICAgIDIzOSxcbiAgICAgIDIzMCxcbiAgICAgIDEwMyxcbiAgICAgIDEyLFxuICAgICAgMSxcbiAgICAgIDEyNyxcbiAgICAgIDE3MixcbiAgICAgIDE4OCxcbiAgICAgIDIxMCxcbiAgICAgIDE3LFxuICAgICAgMTAxLFxuICAgICAgNzYsXG4gICAgICA4OCxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFDSk5HQTIzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMDIxOTI2NjU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIyMjEzODY0ODY1OTg3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1CcVpjRUVKaklvN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVZ0hXemphaXB1aGdPWjhtL3B4cUdpVmRpOU9qbEFtZk5MbEpXWjFqVFM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImt4dzNUcUZLS2hWNFdOMm13SVpQV0JvSVRRbkhsOERUaEFKRE9pQWNsRVJYb3FqZ3EzeXlIdmFtVmQ3dXJERTRHaGVuYk1SN2VxOU9WSVQ2UUYwR0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm15WDZkb1d2UG1ySnNXbkNvV0NFc2o4RTF0ZmhFbmJQbXZ0SVd1WFBiY1FWYTJzSFdidzVqcVUvNUM0MG5QbUVZTS83NXFyN2lFU0dPcW1adGFTcWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwMjE5MjY2NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjQ3MzI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0J4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyZG5NVkJvRlo5UnlSK2tqMGlZSWVCc3NwRUV0bTFXK3FtMjJNbTN4U3IwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjI2NDgyMDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI0NzMyNjAxMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
