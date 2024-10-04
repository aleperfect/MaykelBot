let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝐁𝐨𝐭 𝐟𝐢𝐟𝐭𝐲 𝐜𝐞𝐧𝐭𝐬* ${pesan}`
  let teks = `*💸 Gente reportense 💸*\n\n🔥 ${oi}\n\n🔥 *𝑴𝒆𝒏𝒄𝒊𝒐𝒏𝒆𝒔:*\n`
  for (let mem of participants) {
  teks += `🥷 @${mem.id.split('@')[0]}\n`}
  teks += `➤ 𝐂𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝 𝐟𝐢𝐟𝐭𝐲 𝐜𝐞𝐧𝐭𝐬`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|fc)$/i
  handler.admin = true
  handler.group = true
  export default handler