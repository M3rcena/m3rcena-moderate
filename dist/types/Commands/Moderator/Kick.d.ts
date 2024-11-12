import Discord from "discord.js";
import type { KickTypes } from '../../Types';
declare const Kick: (options: KickTypes) => Promise<Discord.InteractionResponse<boolean> | Discord.OmitPartialGroupDMChannel<Discord.Message<boolean>>>;
export default Kick;
