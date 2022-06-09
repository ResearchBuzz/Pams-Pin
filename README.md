# Pams-Pin

A search interface that uses the PositionStack API to make location-based Twitter search easy.

You can search Twitter by location, but if you want to search a specific address you have to use lat/long. This is annoying, since you have to convert an address before you can run the search. 

Pam's Pin saves you a step by using the PositionStack API to convert your address to lat/long and build a Twitter query URL with it. Pam's Pin then opens the URL in a new browser window. 

In addition to pinpointing a location to search, you can set a radius of up to 100 km and specify whether results should be limited to verified users. 

You will need a PositionStack API key to use Pam's Pin. You can sign up for one at https://positionstack.com/product . There are a number of tiers, but the free tier offers 25,000 lookups a month. This tool uses one lookup. 
