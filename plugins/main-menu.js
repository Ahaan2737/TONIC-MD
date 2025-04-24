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
        const totalCommands = Object.keys(commands).length
        let aliasCount = 0
        Object.values(commands).forEach(cmd => {
            if (cmd.alias) aliasCount += cmd.alias.length
        })

        // Get unique categories count
        const categories = [...new Set(Object.values(commands).map(c => c.category))]
     
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
┊❒.*ʏᴛᴀ*
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
┊❒.*ᴇɴᴠ*
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
┊❒.*ᴠᴇʀsɪᴏɴ*
┊❒.*ᴘᴀɪʀ*
┊❒.*ʀᴇᴘᴏʀᴛ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

*\`❐ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*sᴛɪᴄᴋᴇʀ*
┊❒.*ᴠsᴛɪᴄᴋᴇʀ*
┊❒.*ᴛʀᴛ*
┊❒.*ᴛᴛs*
┊❒.*ʟᴏɢᴏᴘʀᴏ*
┊❒.*ᴀᴛᴛᴘ*
┊❒.*ʟᴏɢᴏ*
┊❒.*ʟᴏɢᴏ1*
┊❒.*ʟᴏɢᴏ2*
┊❒.*ғᴀɴᴄʏ*
┊❒.*ᴠᴠ*
┊❒.*ϙʀ*
┊❒.*ᴛɪɴʏ*
┊❒.*sʜᴏʀᴛ*
┊❒.*ᴠᴇʀsɪᴏɴ*
┊❒.*ᴛᴇᴍᴘᴍᴀɪʟ*
┊❒.*ᴇɴᴄᴏᴅᴇ*
┊❒.*ᴅᴇᴄᴏᴅᴇ*
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
┊❒.*ʀᴀɴᴅᴏᴍᴡᴀʟʟᴘᴇʀ*
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
┊❒.*ɴɪᴋᴀʟ*
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
┊❒.*sᴇᴛᴅɪᴀʀʏᴘᴀssᴡᴏʀᴅ*
┊❒.*ʟᴏɢɪɴ*
┊❒.*ɢᴇᴛɪᴅ*
┊❒.*ʀᴇsᴇᴛᴅɪᴀʀʏᴘᴀssᴡᴏʀᴅ*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑


*\`❐ ᴛᴏᴏʟs ᴍᴇɴᴜ ❐\`* 

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑
┊❒.*ᴛʀᴛ*
┊❒.*ᴊᴏᴋᴇ*
┊❒.*ᴛᴛs*
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
┊❒.*ᴅᴇꜰɪɴᴇ*
┊❒.*ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ*
┊❒.*ᴀɴᴛɪᴅᴇʟᴇᴛᴇ ᴀʟʟ*
┊❒.*ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
┊❒.*ᴀɴᴛɪᴄᴀʟʟ*
┊❒.*ᴀᴜᴛᴏʙɪᴏ*
┊❒.*ϙʀ*
┊❒.*ʀᴇᴀᴅϙʀ*
┊❒.*ᴇɴᴄᴏᴅᴇ*
┊❒.*ᴅᴇᴄᴏᴅᴇ*
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



