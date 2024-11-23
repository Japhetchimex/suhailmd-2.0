const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_15_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInFnN0xLT0JNdEhLdjY5R090T3lTWjNidGhpaERicEhiMjN4WUFZS093Vnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1NTc0ODMyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjk4NDA5MDM1NTEwOUVDNTc4QzUwOUZFRjgxNTM2NTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDAzNzI1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktGZ25zVnRaUzZTT00wbGJtYmJiTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTY2NDQ3MmEtODFlNy00YzE2LWEwMTgtNGI4NTlmYjY1MjA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDQwLFxuICAgICAgOTQsXG4gICAgICA1MixcbiAgICAgIDIyLFxuICAgICAgMjAwLFxuICAgICAgMTgsXG4gICAgICAxMTEsXG4gICAgICAyNDYsXG4gICAgICA4LFxuICAgICAgNDAsXG4gICAgICAxOTQsXG4gICAgICAxMzcsXG4gICAgICAxODAsXG4gICAgICAzOCxcbiAgICAgIDE2OSxcbiAgICAgIDE4LFxuICAgICAgMjI3LFxuICAgICAgMjUsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDE3MCxcbiAgICAgIDY4LFxuICAgICAgMTU5LFxuICAgICAgMjQxLFxuICAgICAgMjEsXG4gICAgICAxNTQsXG4gICAgICAxNTAsXG4gICAgICA2MCxcbiAgICAgIDE3NyxcbiAgICAgIDE1NSxcbiAgICAgIDQ0LFxuICAgICAgMTczLFxuICAgICAgMjA4LFxuICAgICAgMjE5LFxuICAgICAgMTIyLFxuICAgICAgODQsXG4gICAgICAxODAsXG4gICAgICA4NyxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSjdUQ0U1Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NTc0ODMyNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4Mzc2NDk2NTMxNDU5Nzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pXaWlyRUVFSVhFaWJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSktRTWlNNk5tcjlnWmVpUWRlVi84dmZnZjlneDVKMDFSNzk2UHB1WlUyVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLVXdlWjZEanJqNkdyTmhsQ2JOM3pYYm9lSHlyNk9JR24zVWE2aThXeUlsV2hFNkNVV2Fuelk3NWd5OWFxZ1pmdlZidFBibUtmNUh2K0p4RmpzcXJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlOFNHSVpCNzlQQ1NmYVhCdTJBV0dDRXRTTThKZ2FGVGZwbVUrZkYrZG1lSm5yOHUvdCtHcmtXQWRwWGtCZTVhRFVTU29YNkdlc0xCdnJzUFZ6WjhCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1NzQ4MzI1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDAzNzIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnhhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGeGEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKNTdVS3I5dDNOSWU0UTRBUnRZSnVnRmZEU25LcDlIdnRoNGhZcVB4Qkd3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzY2NzA0ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI0MDM3MDY5ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
