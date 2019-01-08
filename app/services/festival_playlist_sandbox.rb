# General purpose "sandbox" service while we are designing the application.
class FestivalPlaylistSandbox
  # Provides a nice demo of utilizing a lineup configuration file to build a
  # small set of data from the Spotify API. Currently just outputs results
  # to the console, but this serves as a starting point to building playlists.
  #
  # => FestivalPlaylistSandbox.build_top_5_for("coachella_2019.yml")
  def self.build_top_5_for(lineup_file)
    Util.authorize_spotify!

    # Currently a proof-of-concept; just spits everything out into a log file.
    platlist_steam = File.new("#{Rails.root}/log/#{lineup_file}.txt", 'w')

    Util.lineup_data(filename: lineup_file).values.flatten.each do |artist_name|
      artist = RSpotify::Artist.search(artist_name).first
      platlist_steam << "~> #{artist_name}\r\n"

      unless artist.nil?
        tracks = artist.top_tracks(:US)

        if tracks.empty?
          platlist_steam << " * (no tracks on Spotify)\r\n"
        else
          tracks.each do |top_track|
            platlist_steam << " - #{top_track.name}\r\n"
          end
        end
      else
        platlist_steam << "> > > NOT FOUND < < <"
      end

      platlist_steam << "\r\n\r\n"

      puts "... finished #{artist_name}!"
    end

    platlist_steam.close
  end
end
