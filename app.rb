require "sinatra"
require 'chartkick'

require_relative 'models/measurement'

get "/" do
  @measurements = Measurement.all
  @co2_measurements = @measurements.select { |m| m.measure_type == 'CO2' }

  @test = @measurements.first.timestamp.class
  erb :home
end
