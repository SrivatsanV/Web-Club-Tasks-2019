#Dependecy - python-dotenv (for the key-value pair from .env file and adds them to environment variable.)
#https://github.com/theskumar/python-dotenv
from dotenv import load_dotenv
load_dotenv(verbose=True)

#Dependecy Song_Lyrics - https://github.com/Techcatchers/PyLyrics-Extractor
from lyrics_extractor import Song_Lyrics

import sys
import os

#The Google API key and Custom Search Engine ID required for the Song_Lyrics Class
Google_Api_Key = os.getenv("GGL_API")
Search_Engine_ID = os.getenv("Search_Engine_ID")

extract_lyrics = Song_Lyrics(Google_Api_Key
, Search_Engine_ID)

#extracting lyrics where the song title is taken as input
song_title, song_lyrics = extract_lyrics.get_lyrics(str(sys.argv))

#output the lyrics
print(song_title,song_lyrics)