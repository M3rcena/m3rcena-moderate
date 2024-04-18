let Ban, Clear, Kick, Mute, Timeout, Unmute, Unwarn, Warn, Unban, RemoveTimeout, Eval;

// Admin Commands
Ban = import('./Commands/Admin/Ban.mjs');
Unban = import ('./Commands/Admin/Unban.mjs');

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

export { Ban, Clear, Kick, Mute, Timeout, Unmute, Unwarn, Warn, Unban, RemoveTimeout, Eval };