# frozen_string_literal: true

require 'csv'

# top-level documentation
class Measurement
  attr_accessor :timestamp, :measure_type, :measure_float, :brand, :serial_number,
                :establishment_id, :establishment_name, :establishment_city,
                :establishment_postcode, :establishment_address, :establishment_latitude,
                :establishment_longitude, :room_id, :room_name

  def initialize(arg)
    keys = [
      '@timestamp', 'measure_type', 'measure_float', 'brand', 'serial_number',
      'establishment_id', 'establishment_name', 'establishment_postcode',
      'establishment_address', 'establishment_latitude', 'establishment_longitude',
      'room_id', 'room_name'
    ]

    keys.each do |key|
      instance_variable_set("@#{key.tr('@', '')}", arg[key])
    end

    convert_datatypes
  end

  def self.all
    @measurements = []
    CSV.foreach('data/20211101_B3D54FD00007B2.csv', headers: :first_row) { |row| @measurements << Measurement.new(row) }
    CSV.foreach('data/20211101_B3D54FD000088A.csv', headers: :first_row) { |row| @measurements << Measurement.new(row) }
    CSV.foreach('data/20211101_B3D54FD000088F.csv', headers: :first_row) { |row| @measurements << Measurement.new(row) }
    @measurements
  end

  private

  def convert_datatypes
    @timestamp = DateTime.parse(@timestamp)
    @measure_float = @measure_float.to_f
    @establishment_id = @establishment_id.to_i
    @establishment_latitude = @establishment_latitude.to_f
    @establishment_longitude = @establishment_longitude.to_f
    @room_id = @room_id.to_i
  end
end
