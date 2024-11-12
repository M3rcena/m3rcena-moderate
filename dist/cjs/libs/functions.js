"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxConsole = exports.checkPackageUpdates = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const child_process_1 = require("child_process");
const string_width_1 = tslib_1.__importDefault(require("string-width"));
const util_1 = require("util");
const package_json_1 = tslib_1.__importDefault(require("../../package.json"));
const checkPackageUpdates = async function (name, notifyUpdate) {
    if (notifyUpdate === false)
        return;
    try {
        const execPromise = (0, util_1.promisify)(child_process_1.exec);
        const { stdout } = await execPromise('npm show @m3rcena/moderate version');
        if (stdout.trim().toString() > package_json_1.default.version) {
            const advertise = (0, chalk_1.default)(`Are you using ${chalk_1.default.red(name)}? Don't lose out on new features!`);
            const msg = (0, chalk_1.default)(`New ${chalk_1.default.green('version')} of ${chalk_1.default.yellow('@m3rcena/moderate')} is available!`);
            const msg2 = (0, chalk_1.default)(`${chalk_1.default.red(package_json_1.default.version)} -> ${chalk_1.default.green(stdout.trim().toString())}`);
            const tip = (0, chalk_1.default)(`Registry: ${chalk_1.default.cyan('https://www.npmjs.com/package/@m3rcena/moderate')}`);
            const install = (0, chalk_1.default)(`Run ${chalk_1.default.green(`npm i @m3rcena/moderate@${stdout.trim().toString()}`)} to update!`);
            (0, exports.boxConsole)([advertise, msg, msg2, tip, install]);
        }
    }
    catch (error) {
        console.error(error);
    }
};
exports.checkPackageUpdates = checkPackageUpdates;
const boxConsole = function (messages) {
    let tips = [];
    let maxLen = 0;
    const defaultSpace = 4;
    const spaceWidth = (0, string_width_1.default)(' ');
    if (Array.isArray(messages)) {
        tips = Array.from(messages);
    }
    else {
        tips = [messages];
    }
    tips = [' ', ...tips, ' '];
    tips = tips.map((msg) => ({ val: msg, len: (0, string_width_1.default)(msg) }));
    maxLen = tips.reduce((len, tip) => {
        maxLen = Math.max(len, tip.len);
        return maxLen;
    }, maxLen);
    maxLen += spaceWidth * 2 * defaultSpace;
    tips = tips.map(({ val, len }) => {
        let i = 0;
        let j = 0;
        while (len + i * 2 * spaceWidth < maxLen) {
            i++;
        }
        j = i;
        while (j > 0 && len + i * spaceWidth + j * spaceWidth > maxLen) {
            j--;
        }
        return ' '.repeat(i) + val + ' '.repeat(j);
    });
    const line = chalk_1.default.yellow('─'.repeat(maxLen));
    console.log(chalk_1.default.yellow('┌') + line + chalk_1.default.yellow('┐'));
    for (const msg of tips) {
        console.log(chalk_1.default.yellow('│') + msg + chalk_1.default.yellow('│'));
    }
    console.log(chalk_1.default.yellow('└') + line + chalk_1.default.yellow('┘'));
};
exports.boxConsole = boxConsole;
