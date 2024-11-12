import chalk from "chalk";
import { exec } from "child_process";
import stringWidth from "string-width";
import { promisify } from "util";

import moderate_package from "../../package.json";

export const checkPackageUpdates = async function (name: string, notifyUpdate?: boolean) {
	if (notifyUpdate === false) return;
	try {
		const execPromise = promisify(exec);
		const { stdout } = await execPromise('npm show @m3rcena/moderate version');

		if (stdout.trim().toString() > moderate_package.version) {
			const advertise = chalk(
				`Are you using ${chalk.red(name)}? Don't lose out on new features!`
			)

			const msg = chalk(
				`New ${chalk.green('version')} of ${chalk.yellow('@m3rcena/moderate')} is available!`,
			);

			const msg2 = chalk(
				`${chalk.red(moderate_package.version)} -> ${chalk.green(stdout.trim().toString())}`,
			)
			const tip = chalk(
				`Registry: ${chalk.cyan('https://www.npmjs.com/package/@m3rcena/moderate')}`,
			);

			const install = chalk(
				`Run ${chalk.green(`npm i @m3rcena/moderate@${stdout.trim().toString()}`)} to update!`,
			);

			boxConsole([advertise, msg, msg2, tip, install])
		}
	} catch (error) {
		console.error(error);
	}
};

export const boxConsole = function (messages: string[]) {
	let tips = [];
	let maxLen = 0;
	const defaultSpace = 4;
	const spaceWidth = stringWidth(' ');
	if (Array.isArray(messages)) {
		tips = Array.from(messages);
	} else {
		tips = [messages];
	}
	tips = [' ', ...tips, ' '];
	tips = tips.map((msg) => ({ val: msg, len: stringWidth(msg) }));
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
	const line = chalk.yellow('─'.repeat(maxLen));
	console.log(chalk.yellow('┌') + line + chalk.yellow('┐'));
	for (const msg of tips) {
		console.log(chalk.yellow('│') + msg + chalk.yellow('│'));
	}
	console.log(chalk.yellow('└') + line + chalk.yellow('┘'));
};