require "sinatra"
require 'chartkick'

require_relative 'models/measurement'

get "/" do
  @measurements = Measurement.all
  @co2_measurements = @measurements.select { |m| m.measure_type == 'CO2' }
  @tmp_measurements = @measurements.select { |m| m.measure_type == 'TMP' }
  @hum_measurements = @measurements.select { |m| m.measure_type == 'HUM' }
  @voct_measurements = @measurements.select { |m| m.measure_type == 'VOCT' }
  @room_names_fr = @measurements.map { |m| m.room_name.sub('Room', 'Salle') }.uniq
  @types = @measurements.map(&:measure_type).uniq

  @test = @measurements.first.timestamp.class
  erb :home
end
