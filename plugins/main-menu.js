const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const fs = require('fs');
const path = require('path');

// Function to get Harare time
function getHarareTime() {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Africa/Harare',
        hour12: true, // Use 12-hour format (optional)
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}

// Function to get Harare time
function getHararedate() {
    return new Date().toLocaleString('en-US', {
    timeZone: 'Africa/Harare',
        hour12: true, // Use 12-hour format (optional)
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

// Function to get number of commands
        const totalCommands = Object.keys(commands).length;
     
// Function to fetch version from package.json
async function fetchVersion() {
    try {
        const packageJsonUrl = 'https://raw.githubusercontent.com/tonicmeef/TONIC-MD/main/package.json';
        const response = await axios.get(packageJsonUrl);
        const packageJson = response.data;
        return packageJson.version || 'Unknown';
    } catch (error) {
        console.error("Error fetching version:", error);
        return 'Unknown';
    }
}

cmd({
    pattern: "menu",
    desc: "bot menu",
    category: "menu",
    react: "🫩",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetch version dynamically
        const version = await fetchVersion();

        let dec = `╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑         
⚙️ *ᴍᴏᴅᴇ* : ${config.MODE}
🛠 *ᴘʀᴇғɪx* : ${config.PREFIX}
⚖️ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB 
🧰 *ᴠᴇʀsɪᴏɴ* : ${version}
🌍 *ʀᴇɢɪᴏɴ* : ᴢɪᴍʙᴀʙᴡᴇ
📜 *ᴘʟᴜɢɪɴs*: ${totalCommands}
⏳ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())} 
⏱️ *ᴛɪᴍᴇ* : ${getHarareTime()}
📆 *ᴅᴀᴛᴇ* : ${getHararedate()}
👑 *ᴄʀᴇᴀᴛᴏʀ* : ᴛᴏɴɪᴄ ᴍᴜɴᴏᴅᴀᴡᴀғᴀ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
${readMore}

*\`❐ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❒
┊❒.*ғʙ*
┊❒.*ɪɴꜱᴛᴀ*
┊❒.*sᴘᴏᴛɪғʏ*
┊❒.*ᴠɪᴅᴇᴏ*
┊❒.*ɢᴅʀɪᴠᴇ*
┊❒.*ᴛᴡɪᴛᴛᴇʀ*
┊❒.*ᴛᴛ*
┊❒.*ᴍᴇᴅɪᴀғɪʀᴇ*
┊❒.*ꜱᴏɴɢ*
┊❒.*ᴘʟᴀʏ*
┊❒.*ᴘʟᴀʏ2*
┊❒.*ᴠɪᴅᴇᴏ*
┊❒.*ɢɪᴛᴄʟᴏɴᴇ*
┊❒.*ɪᴍɢ*
┊❒.*ᴀᴘᴋ*
┊❒.*ʏᴛᴍᴘ3*
┊❒.*ʏᴛᴍᴘ4*
┊❒.*ᴘɪɴᴛᴇʀᴇsᴛ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ sᴇᴀʀᴄʜ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ʏᴛꜱ*
┊❒.*ᴄᴜʀʀᴇɴᴄʏ*
┊❒.*ɢᴏᴏɢʟᴇ*
┊❒.*ʟᴏʟɪ*
┊❒.*ɢɪᴛsᴛᴀʟᴋ*
┊❒.*ᴡɪᴋɪᴘᴇᴅɪᴀ*
┊❒.*sʀᴇᴘᴏ*
┊❒.*ᴍᴏᴠɪᴇɪɴғᴏ*
┊❒.*ɢᴏᴏɢʟᴇ*
┊❒.*ʙɪʙʟᴇ*
┊❒.*ᴍᴏᴠɪᴇ*
┊❒.*ᴡᴇᴀᴛʜᴇʀ*
┊❒.*ssᴡᴇʙ*
┊❒.*ɴᴘᴍ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ᴀɪ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ɢᴘᴛ*
┊❒.*ᴀɪ*
┊❒.*ʙᴏᴛ*
┊❒.*ᴛᴏɴɪᴄ*
┊❒.*ɢᴇᴍɪɴɪ*
┊❒.*ʙɪɴɢ*
┊❒.*ᴄᴏᴘɪʟᴏᴛ*
┊❒.*ᴀʀᴛ*
┊❒.*ᴍᴇᴛᴀᴀɪ*
┊❒.*ᴄʜᴀᴛɢᴘᴛ*
┊❒.*ɢᴘᴛ3*
┊❒.*ɢᴘᴛ4*
┊❒.*ɪᴍᴀɢɪɴᴇ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
┊❒.*sᴇᴛᴛɪɴɢs*
┊❒.*ᴏᴡɴᴇʀ*
┊❒.*ʀᴇᴘᴏ*
┊❒.*ꜱʏꜱᴛᴇᴍ*
┊❒.*ᴜᴘᴅᴀᴛᴇ*
┊❒.*ꜱᴛᴀᴛᴜꜱ*
┊❒.*ʙʟᴏᴄᴋ*
┊❒.*ᴜɴʙʟᴏᴄᴋ*
┊❒.*sʜᴜᴛᴅᴏᴡɴ*
┊❒.*ᴄʟᴇᴀʀᴄʜᴀᴛs*
┊❒.*sᴇᴛᴘᴘ*
┊❒.*ғᴜʟʟᴘᴘ*
┊❒.*ʙʀᴏᴀᴅᴄᴀsᴛ*
┊❒.*ᴊɪᴅ*
┊❒.*ɢᴊɪᴅ*
┊❒.*ʀᴇꜱᴛᴀʀᴛ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ʀᴇᴍᴏᴠᴇ*
┊❒.*ᴅᴇʟᴇᴛᴇ*
┊❒.*ᴀᴅᴅ*
┊❒.*ᴋɪᴄᴋ*
┊❒.*ᴋɪᴄᴋᴀʟʟ*
┊❒.*sᴇᴛɢᴏᴏᴅʙʏᴇ*
┊❒.*sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
┊❒.*ᴘʀᴏᴍᴏᴛᴇ*
┊❒.*ᴅᴇᴍᴏᴛᴇ*
┊❒.*ᴛᴀɢᴀʟʟ*
┊❒.*ɢᴇᴛᴘɪᴄ*
┊❒.*ɪɴᴠɪᴛᴇ*
┊❒.*ʀᴇᴠᴏᴋᴇ*
┊❒.*ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
┊❒.*ᴏᴜᴛ*
┊❒.*ᴀᴅᴍɪɴs*
┊❒.*ᴀʟʟʀᴇǫ*
┊❒.*ᴍᴜᴛᴇ*
┊❒.*ᴜɴᴍᴜᴛᴇ*
┊❒.*ʟᴏᴄᴋɢᴄ*
┊❒.*ᴜɴʟᴏᴄᴋɢᴄ*
┊❒.*ʟᴇᴀᴠᴇ*
┊❒.*ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┊❒.*ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
┊❒.*ᴊᴏɪɴ*
┊❒.*ʜɪᴅᴇᴛᴀɢ*
┊❒.*ɢɪɴғᴏ*
┊❒.*ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
┊❒.*ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
┊❒.*ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
┊❒.*sᴇɴᴅᴅᴍ*
┊❒.*ᴏᴘᴇɴᴛɪᴍᴇ*
┊❒.*ᴄʟᴏsᴇᴛɪᴍᴇ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ᴍᴇɴᴜ*
┊❒.*sᴄʀɪᴘᴛ*
┊❒.*ʀᴇᴘᴏ*
┊❒.*ᴀʟɪᴠᴇ*
┊❒.*ʙᴏᴛɪɴꜰᴏ*
┊❒.*ꜱᴛᴀᴛᴜꜱ*
┊❒.*ꜱᴜᴘᴘᴏʀᴛ*
┊❒.*ᴘɪɴɢ*
┊❒.*ᴘɪɴɢ2*
┊❒.*ꜱʏꜱᴛᴇᴍ*
┊❒.*ᴜᴘᴅᴀᴛᴇ*
┊❒.*ᴄᴏᴍᴍɪᴛ*
┊❒.*ᴘᴀɪʀ*
┊❒.*ʀᴇᴘᴏʀᴛ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*sᴛɪᴄᴋᴇʀ*
┊❒.*ᴠsᴛɪᴄᴋᴇʀ*
┊❒.*ᴛʀᴛ*
┊❒.*ᴛᴛs*
┊❒.*ᴀᴛᴛᴘ*
┊❒.*ʟᴏɢᴏ*
┊❒.*ғᴀɴᴄʏ*
┊❒.*ᴠᴠ*
┊❒.*ϙʀ*
┊❒.*ᴛɪɴʏ*
┊❒.*sʜᴏʀᴛ*
┊❒.*ᴠᴇʀsɪᴏɴ*
┊❒.*ʀɪɴɢᴛᴏɴᴇs*
┊❒.*ᴜʀʟ*
┊❒.*ᴜᴘʟᴏᴀᴅ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ sᴇᴛᴛɪɴɢs ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ᴇɴᴠ*
┊❒.*ᴜᴘᴅᴀᴛᴇ*
┊❒.*ᴘɪɴɢ*
┊❒.*ᴏᴡɴᴇʀ*
┊❒.*sᴇᴛᴛɪɴɢs*
┊❒.*ᴠᴇʀsɪᴏɴ*
┊❒.*sᴜᴘᴘᴏʀᴛ*
┊❒.*ᴀʟɪᴠᴇ*
┊❒.*sᴇssɪᴏɴs*
┊❒.*ʀᴇᴘᴏʀᴛ*
┊❒.*ʟɪsᴛᴘʟᴜɢɪɴs*
┊❒.*ᴘʟᴜɢɪɴᴅʟ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ᴡᴀʟʟᴘᴀᴘᴇʀ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ᴅᴏɢ*
┊❒.*ʀᴇᴍᴏᴠᴇʙɢ*
┊❒.*ʟᴏʟɪ*
┊❒.*ᴀᴡᴏᴏ*
┊❒.*ᴡᴀɪғᴜ*
┊❒.*ɢᴀʀʟ*
┊❒.*ᴍᴀɪᴅ*
┊❒.*ɴᴇᴋᴏ*
┊❒.*ᴀɴɪᴍᴇ*
┊❒.*ᴀɴɪᴍᴇɢɪʀʟ*
┊❒.*ɪᴍɢ*
┊❒.*ᴡᴀʟʟᴘᴀᴘᴇʀ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ғᴜɴ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*sʜʏ*
┊❒.*sʜʏ*
┊❒.*ʜᴀᴘᴘʏ*
┊❒.*sᴀᴅ*
┊❒.*ᴀɴɢʀʏ*
┊❒.*ʜᴀɴᴅ*
┊❒.*sǫᴜɪᴅɢᴀᴍᴇ*
┊❒.*ʜᴜɢ*
┊❒.*ᴍᴏᴏɴ*
┊❒.*ᴋɪss*
┊❒.*ᴄᴏɴғᴜsᴇᴅ*
┊❒.*ʜᴇᴀʀᴛ*
┊❒.*ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┊❒.*ғᴀᴄᴛ*
┊❒.*ᴛʀᴜᴛʜ*
┊❒.*ᴅᴀʀᴇ*
┊❒.*ᴄʜᴀʀᴀᴄᴛᴇʀ*
┊❒.*ᴅɪᴀʀʏ*
┊❒.*ɢᴇᴛɪᴅ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑


*\`❐ ᴛᴏᴏʟs ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ᴛʀᴛ*
┊❒.*ᴊᴏᴋᴇ*
┊❒.*ᴄʜʀᴇᴀᴄᴛ*
┊❒.*ꜰᴀᴄᴛ*
┊❒.*ɢɪᴛʜᴜʙ*
┊❒.*ɢᴘᴀꜱꜱ*
┊❒.*ssᴡᴇʙ*
┊❒.*sʜᴏʀᴛᴇɴ*
┊❒.*ᴛɪɴʏᴜʀʟ*
┊❒.*ʜᴀᴄᴋ*
┊❒.*ǫᴜᴏᴛᴇ*
┊❒.*ʀᴇᴘᴏ*
┊❒.*ᴛɢsᴛɪᴄᴋᴇʀ*
┊❒.*sʀᴇᴘᴏ*
┊❒.*ᴛᴇᴍᴘᴍᴀɪʟ*
┊❒.*ᴛᴇᴍᴘɴᴜᴍ*
┊❒.*ᴅᴇꜰɪɴᴇ*
┊❒.*ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ*
┊❒.*ᴀɴᴛɪᴅᴇʟᴇᴛᴇ ᴀʟʟ*
┊❒.*ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
┊❒.*ᴀɴᴛɪᴄᴀʟʟ*
┊❒.*ᴀᴜᴛᴏʙɪᴏ*
┊❒.*ϙʀ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑


*━━━━━━━━━━━━━━━━━━━━*⁠⁠⁠⁠

> *© Pᴏᴡᴇʀᴇᴅ Bʏ Tᴏɴɪᴄ Tᴇᴄʜ Iɴᴄ.♡*

*━━━━━━━━━━━━━━━━━━━━━*
`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/aoma8i.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363374632065395@newsletter',
                        newsletterName: 'Tᴏɴɪᴄ Tᴇᴄʜ Iɴᴄ. ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});



