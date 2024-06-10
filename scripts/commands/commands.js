module.exports.config = {
    name: "cmd",
    version: "1.0.0",
    permssion: 2,
    credits: "Mirai Team",
    prefix: true,
    description: "Manage/Control all bot modules",
    category: "Dành cho admin",
    usages: "[load/unload/loadAll/unloadAll/info] [Module Name]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "child_process": "",
        "path": ""
    }
};
 
const loadCommand = async function ({ moduleList, threadID, messageID }) {
 
    const { execSync } = global.nodemodule['child_process'];
    const { writeFileSync, unlinkSync, readFileSync } = global.nodemodule['fs-extra'];
    const { join } = global.nodemodule['path'];
    const { configPath, mainPath, api } = global.client;
    const logger = require(mainPath + '/utils/log');
const picture = (await axios.get(`https://banner2.cleanpng.com/20180811/kar/kisspng-command-line-interface-computer-icons-cmd-exe-logo-amp-quot-command-and-conquer-amp-quo-5b6e6a67b09379.3208606815339628557233.jpg`, { responseType: "stream"})).data
    var errorList = [];
    delete require['resolve'][require['resolve'](configPath)];
    var configValue = require(configPath);
    writeFileSync(configPath + '.temp', JSON.stringify(configValue, null, 2), 'utf8');
    for (const nameModule of moduleList) {
        try {
            const dirModule = __dirname + '/' + nameModule + '.js';
            delete require['cache'][require['resolve'](dirModule)];
            const command = require(dirModule);
            global.client.commands.delete(nameModule);
            if (!command.config || !command.run || !command.config.commandCategory) 
                throw new Error('Module is not properly formatted!');
            global.client['eventRegistered'] = global.client['eventRegistered']['filter'](info => info != command.config.name);
            if (command.config.dependencies && typeof command.config.dependencies == 'object') {
                const listPackage = JSON.parse(readFileSync('./package.json')).dependencies,
                    listbuiltinModules = require('module')['builtinModules'];
                for (const packageName in command.config.dependencies) {
                    var tryLoadCount = 0,
                        loadSuccess = ![],
                        error;
                    const moduleDir = join(global.client.mainPath, 'nodemodules', 'node_modules', packageName);
                    try {
                        if (listPackage.hasOwnProperty(packageName) || listbuiltinModules.includes(packageName)) global.nodemodule[packageName] = require(packageName);
                        else global.nodemodule[packageName] = require(moduleDir);
                    } catch {
                        logger.loader('Package not found ' + packageName + ' Support for commands ' + command.config.name+ 'Proceed with the installation...', 'Warn');
                        const insPack = {};
                        insPack.stdio = 'inherit';
                        insPack.env = process.env ;
                        insPack.shell = !![];
                        insPack.cwd = join(global.client.mainPath,'nodemodules')
                        execSync('npm --package-lock false --save install ' + packageName + (command.config.dependencies[packageName] == '*' || command.config.dependencies[packageName] == '' ? '' : '@' + command.config.dependencies[packageName]), insPack);
                        for (tryLoadCount = 1; tryLoadCount <= 3; tryLoadCount++) {
                            require['cache'] = {};
                            try {
                                if (listPackage.hasOwnProperty(packageName) || listbuiltinModules.includes(packageName)) global.nodemodule[packageName] = require(packageName);
                                else global.nodemodule[packageName] = require(moduleDir);
                                loadSuccess = !![];
                                break;
                            } catch (erorr) {
                                error = erorr;
                            }
                            if (loadSuccess || !error) break;
                        }
                        if (!loadSuccess || error) throw 'Unable to download package ' + packageName + (' for commands ') + command.config.name +', fault: ' + error + ' ' + error['stack'];
                    }
                }
                logger.loader('Successfully loaded the entire package for the command' + command.config.name);
            }
            if (command.config.envConfig && typeof command.config.envConfig == 'Object') try {
                for (const [key, value] of Object['entries'](command.config.envConfig)) {
                    if (typeof global.configModule[command.config.name] == undefined) 
                        global.configModule[command.config.name] = {};
                    if (typeof configValue[command.config.name] == undefined) 
                        configValue[command.config.name] = {};
                    if (typeof configValue[command.config.name][key] !== undefined) 
                        global.configModule[command.config.name][key] = configValue[command.config.name][key];
                    else global.configModule[command.config.name][key] = value || '';
                    if (typeof configValue[command.config.name][key] == undefined) 
                        configValue[command.config.name][key] = value || '';
                }
                logger.loader('Loaded config' + ' ' + command.config.name);
            } catch (error) {
                throw new Error('Failed to load config module, error: ' + JSON.stringify(error));
            }
            if (command['onLoad']) try {
                const onLoads = {};
                onLoads['configValue'] = configValue;
                command['onLoad'](onLoads);
            } catch (error) {
                throw new Error('Unable to onLoad module, error: ' + JSON.stringify(error), 'error');
            }
            if (command.handleEvent) global.client.eventRegistered.push(command.config.name);
            (global.config.commandDisabled.includes(nameModule + '.js') || configValue.commandDisabled.includes(nameModule + '.js')) 
            && (configValue.commandDisabled.splice(configValue.commandDisabled.indexOf(nameModule + '.js'), 1),
            global.config.commandDisabled.splice(global.config.commandDisabled.indexOf(nameModule + '.js'), 1))
            global.client.commands.set(command.config.name, command)
            logger.loader('Loaded command ' + command.config.name + '!');
        } catch (error) {
            errorList.push('- ' + nameModule + ' reason:' + error + ' at ' + error['stack']);
        };
    }
    if (errorList.length != 0) api.sendMessage('Commands that went wrong while loading: ' + errorList.join(' '), threadID, messageID);
    api.sendMessage({body: '====[ 𝗖𝗠𝗗 𝗟𝗢𝗔𝗗 ]====\n❄️ Just loaded successfully ' + (moduleList.length - errorList.length) + ' command \n━━━━━━━━━━━━━━━━\n====[ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 ]====\n🥀 𝗠𝗼𝗱𝘂𝗹𝗲𝘀 ('+moduleList.join(', ') + '.js) 🌸',attachment: (picture)}, threadID, messageID) 
    writeFileSync(configPath, JSON.stringify(configValue, null, 4), 'utf8')
    unlinkSync(configPath + '.temp');
    return;
}
 
const unloadModule = function ({ moduleList, threadID, messageID }) {
    const { writeFileSync, unlinkSync } = global.nodemodule["fs-extra"];
    const { configPath, mainPath, api } = global.client;
    const logger = require(mainPath + "/utils/log").loader;
 
    delete require.cache[require.resolve(configPath)];
    var configValue = require(configPath);
    writeFileSync(configPath + ".temp", JSON.stringify(configValue, null, 4), 'utf8');
 
    for (const nameModule of moduleList) {
        global.client.commands.delete(nameModule);
        global.client.eventRegistered = global.client.eventRegistered.filter(item => item !== nameModule);
        configValue["commandDisabled"].push(`${nameModule}.js`);
        global.config["commandDisabled"].push(`${nameModule}.js`);
        logger(`Unloaded command ${nameModule}!`);
    }
 
    writeFileSync(configPath, JSON.stringify(configValue, null, 4), 'utf8');
    unlinkSync(configPath + ".temp");
 
    return api.sendMessage(`====[ 𝗖𝗠𝗗 ]====\n❄️ Successfully unloaded ${moduleList.length} command\n━━━━━━━━━━━━━━━━\n====[ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 ]====\n🥀 𝗠𝗼𝗱𝘂𝗹𝗲𝘀  ('+moduleList.join(', ') + '.js) 🌸`, threadID, messageID);
}
 
module.exports.run = function ({ event, args, api }) {
 
    const cheerio = global.nodemodule["cheerio"];
  const permission = ["","","100026921149093", ""];
	if (!permission.includes(event.senderID)) return api.sendMessage("cút:))", event.threadID, event.messageID);
 
    const { readdirSync } = global.nodemodule["fs-extra"];
    const { threadID, messageID } = event;
 
    var moduleList = args.splice(1, args.length);
 
    switch (args[0]) {
      case "c": 
        case "count":{
      let commands = client.commands.values();
		  let infoCommand = "";
			api.sendMessage(`====[ 𝗖𝗠𝗗 𝗖𝗼𝘂𝗻𝘁 ]====\n❄️ Now ${global.config.BOTNAME} have ${client.commands.size} usable command\n🥀 wish you and all members to use bots etc.`+ infoCommand, event.threadID, event.messageID);
      break;
		}
        case "l": 
        case "load":{
            if (moduleList.length == 0) return api.sendMessage("The module name must not be blank!", threadID, messageID);
            else return loadCommand({ moduleList, threadID, messageID });
        }
        case "ul": 
        case "unload":{
            if (moduleList.length == 0) return api.sendMessage("Module name must not be blank!", threadID, messageID);
            else return unloadModule({ moduleList, threadID, messageID });
        }
        case "lA": 
         case "loadAll":{
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return loadCommand({ moduleList, threadID, messageID });
        }
        case "ulA": 
        case "unloadAll":{
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example') && !file.includes("command"));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return unloadModule({ moduleList, threadID, messageID });
        }
        case "i": {
            const command = global.client.commands.get(moduleList.join("") || "");
 
            if (!command) return api.sendMessage("The module you imported does not exist!", threadID, messageID);
 
            const { name, version, hasPermssion, credits, cooldowns, dependencies } = command.config;
 
            return api.sendMessage(
                "=== " + name.toUpperCase() + " ===\n" +
                "- Coded by: " + credits + "\n" +
                "- Version: " + version + "\n" +
                "- Request permissions: " + ((hasPermssion == 0) ? "User" : (hasPermssion == 1) ? "Canal Administrator" : "Bot operator" ) + "\n" +
                "- Standby time: " + cooldowns + " second(s)\n" +
                `- Required packages: ${(Object.keys(dependencies || {})).join(", ") || "Without"}`,
                threadID, messageID
            );
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
        }
