# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

Song.destroy_all
Album.destroy_all 
Artist.destroy_all 
Genre.destroy_all 
User.destroy_all
Playlist.destroy_all

demo_user = User.create(email: 'jt@gmail.com', username: 'jeffrey.tseng3', password: "123123", birth_month: '01', birth_day: 1, birth_year: 1, gender: "male")
demo_user.save! 

genre_pop = Genre.create(category: "pop")
genre_rap = Genre.create(category: 'rap')
genre_rb = Genre.create(category: 'r&b')
genre_rock = Genre.create(category: 'rock')


artist1 = genre_pop.artists.create(name: 'Bruno Mars', about: 'King of Pop')
artist_file1 = open('https://dropify-seeds.s3.amazonaws.com/bruno_mars.jpg')
artist1.artist_img.attach(io: artist_file1, filename: 'bruno_mars.jpg')
artist1.save!

artist2 = genre_rb.artists.create(name: 'Aminé', about: 'R&B Master')
artist_file2 = open('https://dropify-seeds.s3.amazonaws.com/amine.jpg')
artist2.artist_img.attach(io: artist_file2, filename: 'amine.jpg')
artist2.save!


artist3 = genre_pop.artists.create(name: 'Alina Baraz', about: 'electricity')
artist_file3 = open('https://dropify-seeds.s3.amazonaws.com/alina_baraz.jpg')
artist3.artist_img.attach(io: artist_file3, filename: 'alina_baraz.jpg')
artist3.save!


artist4 = genre_rb.artists.create(name: 'Chris Brown', about: 'Tempo Maker')
artist_file4 = open('https://dropify-seeds.s3.amazonaws.com/chris_brown.png')
artist4.artist_img.attach(io: artist_file4, filename: 'chris_brown.jpg')
artist4.save!

artist5 = genre_rap.artists.create(name: 'Drake', about: 'D')
artist_file5 = open('https://dropify-seeds.s3.amazonaws.com/drake_photo.jpg')
artist5.artist_img.attach(io: artist_file5, filename: 'drake_photo.jpg')
artist5.save!

artist6 = genre_pop.artists.create(name: 'Post Malone', about: 'Post')
artist_file6 = open('https://dropify-seeds.s3.amazonaws.com/post.jpg')
artist6.artist_img.attach(io: artist_file6, filename: 'post_photo.jpg')
artist6.save!

artist7 = genre_pop.artists.create(name: "Taylor Swift", about: 'Tay')
artist_file7 = open('https://dropify-seeds.s3.amazonaws.com/taylorswift.jpg')
artist7.artist_img.attach(io: artist_file7, filename: 'taylor_swift_photo.jpg')
artist7.save!

artist8 = genre_rb.artists.create(name: "Kehlani", about: 'K')
artist_file8 = open('https://dropify-seeds.s3.amazonaws.com/kehlani.jpg')
artist8.artist_img.attach(io: artist_file8, filename: 'kehlani.jpg')
artist8.save!

artist9 = genre_pop.artists.create(name: "LANY", about: 'LANY')
artist_file9 = open('https://dropify-seeds.s3.amazonaws.com/LANY.jpg')
artist9.artist_img.attach(io: artist_file9, filename: 'lany.jpg')
artist9.save!



album1 = artist1.albums.create(title: '24K Magic')
album_file1 = open('https://dropify-seeds.s3.amazonaws.com/24k_bruno_mars.jpg')
album1.album_img.attach(io: album_file1, filename: '24k_bruno_mars.jpg')
album1.save! 

album2 = artist3.albums.create(title: 'Electric')
album_file2 = open('https://dropify-seeds.s3.amazonaws.com/electric_alina_baraz.jpg')
album2.album_img.attach(io: album_file2, filename: 'electric_alina_baraz.jpg')
album2.save! 

album3 = artist2.albums.create(title: 'Heebeejeebies')
album_file3 = open('https://dropify-seeds.s3.amazonaws.com/heebeejeebies_amine.png')
album3.album_img.attach(io: album_file3, filename: 'heebeejeebies_amine.jpg')
album3.save! 


album4 = artist4.albums.create(title: 'Chris Brown (Album)')
album_file4 = open('https://dropify-seeds.s3.amazonaws.com/chris_brown_album.jpg')
album4.album_img.attach(io: album_file4, filename: 'chris_brown_album.jpg')
album4.save! 

album5 = artist5.albums.create(title: 'Scorpion')
album_file5 = open('https://dropify-seeds.s3.amazonaws.com/d_scorpion.jpg')
album5.album_img.attach(io: album_file5, filename: 'drake_scorpion.jpg')
album5.save! 

album6 = artist6.albums.create(title: 'Beerbongs & Bentleys')
album_file6 = open('https://dropify-seeds.s3.amazonaws.com/bentley.jpg')
album6.album_img.attach(io: album_file6, filename: 'post_beer.jpg')
album6.save! 

album7 = artist7.albums.create(title: 'ME!')
album_file7 = open('https://dropify-seeds.s3.amazonaws.com/me!.jpg')
album7.album_img.attach(io: album_file7, filename: 'me_taylor.jpg')
album7.save! 

album8 = artist8.albums.create(title: 'CRZY')
album_file8 = open('https://dropify-seeds.s3.amazonaws.com/crzy.jpg')
album8.album_img.attach(io: album_file8, filename: 'crzy_kehlani.jpg')
album8.save! 

album9 = artist9.albums.create(title: 'LANY')
album_file9 = open('https://dropify-seeds.s3.amazonaws.com/LNAYALBUM.jpg')
album9.album_img.attach(io: album_file9, filename: 'lany.jpg')
album9.save! 




song1 = album2.songs.create(song_title: 'Electric', song_length: 245)
song_file1 = open('https://dropify-seeds.s3.amazonaws.com/Alina+Baraz+ft+Khalid+-+Electric+(Clean).mp3')
song1.audio_track.attach(io: song_file1, filename: 'electric_alina_baraz.mp3')

song2 = album3.songs.create(song_title: 'Heebeejeebies', song_length: 220)
song_file2 = open('https://dropify-seeds.s3.amazonaws.com/Amine+ft+Kehlani+-+Heebiejeebies+(Dirty).mp3')
song2.audio_track.attach(io: song_file2, filename: 'heebeejeebies_amine.mp3')

song3 = album1.songs.create(song_title: 'Chunky', song_length: 185)
song_file3 = open('https://dropify-seeds.s3.amazonaws.com/Bruno+Mars+-+Chunky+(Dirty).mp3')
song3.audio_track.attach(io: song_file3, filename: 'chunky_bruno_mars.mp3')

song4  = album1.songs.create(song_title: 'Finesse', song_length: 188)
song_file4 = open('https://dropify-seeds.s3.amazonaws.com/Bruno+Mars+-+Finesse+(Dirty).mp3')
song4.audio_track.attach(io: song_file4, filename: 'finesse_bruno_mars.mp3')

song5  = album1.songs.create(song_title: 'Perm', song_length: 210)
song_file5 = open('https://dropify-seeds.s3.amazonaws.com/Bruno+Mars+-+Perm+(Clean).mp3')
song5.audio_track.attach(io: song_file5, filename: 'perm_bruno_mars.mp3')

song6  = album4.songs.create(song_title: 'Run It', song_length: 192)
song_file6 = open('https://dropify-seeds.s3.amazonaws.com/Chris+Brown+-+Run+It+(Clean).mp3')
song6.audio_track.attach(io: song_file6, filename: 'run_it_chris_brown.mp3')

song7  = album4.songs.create(song_title: 'Yo (Excuse Me Miss)', song_length: 225)
song_file7 = open('https://dropify-seeds.s3.amazonaws.com/Chris+Brown+-+Yo+(Excuse+Me+Miss)+(Clean).mp3')
song7.audio_track.attach(io: song_file7, filename: 'yo_chris_brown.mp3')

song8  = album5.songs.create(song_title: "God's Plan", song_length: 199)
song_file8 = open("https://dropify-seeds.s3.amazonaws.com/Drake+-+God's+Plan+(Dirty).mp3")
song8.audio_track.attach(io: song_file8, filename: 'godsplan.mp3')

song9  = album6.songs.create(song_title: "Candy Paint", song_length: 229)
song_file9 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+-+Candy+Paint+(Dirty).mp3')
song9.audio_track.attach(io: song_file9, filename: 'candy_paint.mp3')

song10  = album7.songs.create(song_title: "ME!", song_length: 193)
song_file10 = open('https://dropify-seeds.s3.amazonaws.com/Taylor+Swift+ft+Brendon+Urie+-+ME!+(Clean).mp3')
song10.audio_track.attach(io: song_file10, filename: 'me.mp3')

song11  = album8.songs.create(song_title: "CRZY", song_length: 191)
song_file11 = open('https://dropify-seeds.s3.amazonaws.com/Kehlani+-+CRZY+(Dirty).mp3')
song11.audio_track.attach(io: song_file11, filename: 'crzy.mp3')


song12  = album5.songs.create(song_title: "Nonstop", song_length: 238)
song_file12 = open("https://dropify-seeds.s3.amazonaws.com/Drake+-+Nonstop+(Dirty).mp3")
song12.audio_track.attach(io: song_file12, filename: 'nonstop.mp3')

song13  = album5.songs.create(song_title: "I'm Upset", song_length: 214)
song_file13 = open("https://dropify-seeds.s3.amazonaws.com/Drake+-+I'm+Upset+(Dirty).mp3")
song13.audio_track.attach(io: song_file13, filename: 'imupset.mp3')

song14  = album6.songs.create(song_title: "Better Now", song_length: 231)
song_file14 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+-+Better+Now+(Dirty).mp3')
song14.audio_track.attach(io: song_file14, filename: 'betternow.mp3')

song15  = album6.songs.create(song_title: "Over Now", song_length: 247)
song_file15 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+-+Over+Now+(Dirty).mp3')
song15.audio_track.attach(io: song_file15, filename: 'overnow.mp3')

song16  = album6.songs.create(song_title: "Paranoid", song_length: 221)
song_file16 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+-+Paranoid+(Dirty).mp3')
song16.audio_track.attach(io: song_file16, filename: 'paranoid.mp3')

song17  = album6.songs.create(song_title: "Rich & Sad", song_length: 206)
song_file17 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+-+Rich+%26+Sad+(Dirty).mp3')
song17.audio_track.attach(io: song_file17, filename: 'rich&sad.mp3')

song19  = album6.songs.create(song_title: "Stay", song_length: 228)
song_file19 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+-+Sugar+Wraith+(Dirty).mp3')
song19.audio_track.attach(io: song_file19, filename: 'stay.mp3')

song20  = album6.songs.create(song_title: "Zack & Codeine", song_length: 206)
song_file20 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+-+Zack+%26+Codeine+(Dirty).mp3')
song20.audio_track.attach(io: song_file20, filename: 'zackcodeine.mp3')

song21  = album6.songs.create(song_title: "Psycho", song_length: 220)
song_file21 = open('https://dropify-seeds.s3.amazonaws.com/Post+Malone+ft+Ty+Dolla+Sign+-+Psycho+(Dirty).mp3')
song21.audio_track.attach(io: song_file21, filename: 'psycho.mp3')

song22  = album9.songs.create(song_title: "Good Girls", song_length: 249)
song_file22 = open('https://dropify-seeds.s3.amazonaws.com/LANY+-+Good+Girls+(Clean).mp3')
song22.audio_track.attach(io: song_file22, filename: 'goodgirls.mp3')

song23  = album9.songs.create(song_title: "Hurts", song_length: 216)
song_file23 = open('https://dropify-seeds.s3.amazonaws.com/LANY+-+Hurts+(Clean).mp3')
song23.audio_track.attach(io: song_file23, filename: 'hurts.mp3')

song24  = album9.songs.create(song_title: "ILYSB", song_length: 211)
song_file24 = open('https://dropify-seeds.s3.amazonaws.com/LANY+-+ILYSB+(Clean).mp3')
song24.audio_track.attach(io: song_file24, filename: 'ILYSB.mp3')







