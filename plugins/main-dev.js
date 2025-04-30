const { cmd } = require("../command");

cmd({
    pattern: "dev",
    desc: "All About The Bot & Dev",
    category: "main",
    react: "🐬",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `┏───────────────────────
┆ ===[ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴏғ ᴛᴏɴɪᴄ-ᴍᴅ* ]===
┣────────────────────────
┣──=[ *ᴄᴏᴅᴇᴅ ᴡɪᴛʜ ʟᴏᴠᴇ😍* ]==──
│
│ *「 ᴏᴡɴᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ 🎗️ 」*
│
│ *ɴᴀᴍᴇ*:    ᴛᴏɴɪᴄ ᴍᴜɴᴏᴅᴀᴡᴀғᴀ
│ *ʀᴇɢɪᴏɴ*:  ᴢɪᴍʙᴀʙᴡᴇ
│ *ʟᴀɴɢ*:    ᴇɴɢʟɪsʜ
│ *ɪᴅᴏʟ*:     ᴇʟʟᴏɴ ᴍᴜsᴋ
│ *ᴛᴇᴀᴍ*:    ʟɪᴠᴇʀᴘᴏᴏʟ(ʀᴇᴅs)
│ *ᴄʜᴀᴛ*:    https://t.me/tonicmee_f
│ *ᴀɢᴇ*:     17 ʏᴇᴀʀs
│ *ʜᴏʙʙʏ* :  ᴄᴏᴅɪɴɢ
│ *sᴛᴀᴛᴜs*:  ᴛᴀᴋᴇɴ😋

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴏɴɪᴄ ᴛᴇᴄʜ™ (ᴍᴀɪɴ ᴅᴇᴠ)*

> ᴛʜᴀɴᴋs ᴛᴏ ᴛᴏxxɪᴄʙᴏʏ(▀̿Ĺ̯▀̿)̿(ᴄᴏɴᴛʀɪʙᴜᴛᴇʀ)

│©2025 - 2030
╰═══════════════════════
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://files.catbox.moe/scvigx.jpg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});
