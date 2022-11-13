import { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } from "discord.js";
import { webhookReporter } from "../utilities";

module.exports = {
    pluginInfo: {
        /** Name of the plugin. Simple as it gets really. */
        name: "my-test-plugin",
        /** Author(s) of the plugin. Please use the GitHub username of the person creating the PR on the repo */
        author: "@whizbangpop",
        /** Current version of the plugin. Please change this as you update as it allows the CLI to know when a new plugin is waiting. */
        version: "1.0.0"
    },
    data: new SlashCommandBuilder()
        .setName('testplugin')
        .setDescription('Testing plugin. Please remove if installed.'),
    async execute(ctx: CommandInteraction, client: Client) {
        const embed = new EmbedBuilder()
            .setTitle('WhizBangPop Test Plugin')

        await ctx.reply({embeds: [embed]})

        webhookReporter('note', 'ha fool')
    }
}
