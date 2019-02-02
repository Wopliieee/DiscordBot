import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time

Client = discord.Client()
client = commands.Bot(command_prefix = "?")

@client.event
async def on_ready():
    print("Bot is ready!")

@client.event
async def on_message(message):
    if message.content == "cookie":
        await client.send_message(message.channel, ":cookie:")
        

client.run("NTQxMDU5NjU0NTA0MTUzMDg5.DzaACA.9PpYr_MnZVF79ie06vpAfjZw-J4")
client.login(process.env.BOT_TOKEN)
