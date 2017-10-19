require 'active_support/core_ext/object/blank'
require 'csv'
require 'json'

class Parser

  attr_accessor :path, :each_row , :subjects

  def initialize(path)
    @path = path
    @subjects = [] 
  end

  def parseFile
    CSV.foreach(@path, "r") do |row|
      @subjects << @each_row = {
        materia: get_field(row[0]),
        catedra: get_field(row[1]),
        anio: get_field(row[2]),
        regimen: get_field(row[3]),
        titular: get_field(row[4]),
        sec_horarios: get_field(row[5]),
        sec_ubicacion: get_field(row[6]),
        secretarix: get_field(row[7]), 
        telefono: get_field(row[8]),
        email: get_field(row[9]),
        tutorias: get_field(row[10]),
        entorno: get_field(row[11]), 
        clave: get_field(row[12]), 
        apuntes: get_field(row[13]), 
        grupo_fb: get_field(row[14]),
        fb: get_field(row[15]),
        tw: get_field(row[16]),
        web: get_field(row[17])
      }.to_json
    end

  end

  def to_json()
  end

  def get_field(field)
    field.blank? ? nil : field.strip
  end

end

#execute script

parser = Parser.new("materias-remediar.csv")
parser.parseFile()

