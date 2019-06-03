# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'


song1 = Song.create(song_title: 'Electric', song_length: 245)
song_file1 = open('https://dropify-seeds.s3.amazonaws.com/Alina+Baraz+ft+Khalid+-+Electric+(Clean).mp3')
song1.audio_track.attach(io: song_file1, filename: 'electric_alina_baraz.mp3')

song2 = Song.create(song_title: 'Heebeejeebies', song_length: 220)
song_file2 = open('https://dropify-seeds.s3.amazonaws.com/Cardi+B+-+Press+(Dirty).mp3')
song2.audio_track.attach(io: song_file2, filename: 'heebeejeebies_amine.mp3')

song3 = Song.create(song_title: 'Chunky', song_length: 185)
song_file3 = open('https://dropify-seeds.s3.amazonaws.com/Bruno+Mars+-+Chunky+(Dirty).mp3')
song3.audio_track.attach(io: song_file3, filename: 'chunky_bruno_mars.mp3')

song4  = Song.create(song_title: 'Finesse', song_length: 188)
song_file4 = open('https://dropify-seeds.s3.amazonaws.com/Bruno+Mars+-+Finesse+(Dirty).mp3')
song4.audio_track.attach(io: song_file4, filename: 'finesse_bruno_mars.mp3')

song5  = Song.create(song_title: 'Perm', song_length: 210)
song_file5 = open('https://dropify-seeds.s3.amazonaws.com/Bruno+Mars+-+Perm+(Clean).mp3')
song5.audio_track.attach(io: song_file5, filename: 'finesse_bruno_mars.mp3')




