let Ban, Unban, TempBan, RemoveTempBan, Embed, Buttons, ChannelCreate, EventCreate, Say, Clear, Kick, Mute, Unmute, Warn, Unwarn, Timeout, RemoveTimeout, Eval, ReloadCommands, AvatarChange, BotNameChange, StatusChange;

// Admin Commands
Ban = import('./Commands/Admin/Ban.mjs');
Unban = import ('./Commands/Admin/Unban.mjs');

TempBan = import('./Commands/Admin/TempBan.mjs');
RemoveTempBan = import('./Commands/Admin/RemoveTempBan.mjs');

Embed = import('./Commands/Admin/Embed.mjs');
Buttons = import('./Commands/Admin/Buttons.mjs');

ChannelCreate = import('./Commands/Admin/ChannelCreate.mjs');
EventCreate = import('./Commands/Admin/EventCreate.mjs');

Say = import('./Commands/Admin/Say.mjs');


// Moderator Commands
Clear = import('./Commands/Moderator/Clear.mjs');
Kick = import('./Commands/Moderator/Kick.mjs');

Mute = import('./Commands/Moderator/Mute.mjs');
Unmute = import('./Commands/Moderator/Unmute.mjs');

Warn = import('./Commands/Moderator/Warn.mjs');
Unwarn = import('./Commands/Moderator/Unwarn.mjs');

Timeout = import('./Commands/Moderator/Timeout.mjs');
RemoveTimeout = import('./Commands/Moderator/RemoveTimeout.mjs');

// Owner Command
Eval = import('./Commands/Owner/Eval.mjs');
ReloadCommands = import('./Commands/Owner/ReloadCommands.mjs');

AvatarChange = import('./Commands/Owner/AvatarChange.mjs');
BotNameChange = import('./Commands/Owner/BotNameChange.mjs');
StatusChange = import('./Commands/Owner/StatusChange.mjs');

export { Ban, Unban, TempBan, RemoveTempBan, Embed, Buttons, ChannelCreate, EventCreate, Say, Clear, Kick, Mute, Unmute, Warn, Unwarn, Timeout, RemoveTimeout, Eval, ReloadCommands, AvatarChange, BotNameChange, StatusChange };