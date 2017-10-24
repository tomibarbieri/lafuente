require 'active_support/core_ext/object/blank'
require 'csv'
require 'json'

class Parser

  attr_accessor :path, :medicina,
    :years, :year_1, :year_2, :year_3, :year_4, :year_5, :year_6,
    :regimes, :regime_1, :regime_2, :regime_3,
    :subjects, :cathedras 
  #:subject_i y :cathedra_i

  def initialize(path)
    @path = path
    @years = { primero: { anual: [], cuatrimestral: [], bimestral: [] }, 
               segundo: { anual: [], cuatrimestral: [], bimestral: [] },
               tercero: { anual: [], cuatrimestral: [], bimestral: [] },
               cuarto:  { anual: [], cuatrimestral: [], bimestral: [] },
               quinto:  { anual: [], cuatrimestral: [], bimestral: [] },
               sexto:    { anual: [], cuatrimestral: [], bimestral: [] }}
  end

  def parseFile
    CSV.foreach(@path, "r") do |row|
      each_row = {
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
      }
      pepe(each_row)
    end
  end

  def pepe(row)

    puts "--------------------------------------------------------------------------------------------------"
    puts row
    unless row[:anio].blank?
      case row[:anio] 
      when "1"
        unless row[:regimen].blank?
          case row[:regimen] 
          when "Anual"
            @years[:primero][:anual] << row
          when "Cuatrimestral"
            @years[:primero][:cuatrimestral] << row
          when "Bimestral"
            @years[:primero][:bimestral] << row
          end
        end
      when "2"
        case row[:regimen]
        when "Anual"
          @years[:segundo][:anual] << row
        when "Cuatrimestral"
          @years[:segundo][:cuatrimestral] << row
        when "Bimestral"
          @years[:segundo][:bimestral] << row
        end
      when "3"
        case row[:regimen]
        when "Anual"
          @years[:tercero][:anual] << row
        when "Cuatrimestral"
          @years[:tercero][:cuatrimestral] << row
        when "Bimestral"
          @years[:tercero][:bimestral] << row
        end
      when "4"
        case row[:regimen]
        when "Anual"
          @years[:cuatro][:anual] << row
        when "Cuatrimestral"
          @years[:cuarto][:cuatrimestral] << row
        when "Bimestral"
          @years[:cuarto][:bimestral] << row
        end
      when "5"
        case row[:regimen]
        when "Anual"
          @years[:quinto][:anual] << row
        when "Cuatrimestral"
          @years[:quinto][:cuatrimestral] << row
        when "Bimestral"
          @years[:quinto][:bimestral] << row
        end
      when "6"
        case row[:regimen]
        when "Anual"
          @years[:sexto][:anual] << row
        when "Cuatrimestral"
          @years[:sexto][:cuatrimestral] << row
        when "Bimestral"
          @years[:sexto][:bimestral] << row
        end
      end
    end
    puts @years
  end

  #  def to_json()
  #    {
  #      "name": "medicina2004",
  #      "years": [{ 
  #          "name": "Primero", 
  #          "regimes": [{
  #              "name": "Anual",
  #              "subjects": []
  #            }, {
  #              "name": "Cuatrimestral",
  #              "subjects": []
  #            }, {
  #              "name": "Bimestral",
  #              "subjects": []
  #            }
  #          }]
  #        }, { 
  #          "name": "Segundo", 
  #          "regimes": [{
  #              "name": "Anual",
  #              "subjects": []
  #            }, {
  #              "name": "Cuatrimestral",
  #              "subjects": []
  #            }, {
  #              "name": "Bimestral",
  #              "subjects": []
  #            }
  #        }, { 
  #          "name": "Tercero",
  #          "regimes": [{
  #              "name": "Anual",
  #              "subjects": []
  #            }, {
  #              "name": "Cuatrimestral",
  #              "subjects": []
  #            }, {
  #              "name": "Bimestral",
  #              "subjects": []
  #            }
  #        }, {
  #          "name": "Cuarto",
  #          "regimes": [{
  #              "name": "Anual",
  #              "subjects": []
  #            }, {
  #              "name": "Cuatrimestral",
  #              "subjects": []
  #            }, {
  #              "name": "Bimestral",
  #              "subjects": []
  #            }
  #        }, { 
  #          "name": "Quinto",
  #          "regimes": [{
  #              "name": "Anual",
  #              "subjects": []
  #            }, {
  #              "name": "Cuatrimestral",
  #              "subjects": []
  #            }, {
  #              "name": "Bimestral",
  #              "subjects": []
  #            }
  #        }, { 
  #          "name": "Sexto", 
  #          "regimes": [{
  #              "name": "Anual",
  #              "subjects": []
  #            }, {
  #              "name": "Cuatrimestral",
  #              "subjects": []
  #            }, {
  #              "name": "Bimestral",
  #              "subjects": []
  #            }
  #        }]
  #    }
  #  end

  def get_field(field)
    field.blank? ? nil : field.strip
  end

end

#execute script

parser = Parser.new("medicina2004.csv")
parser.parseFile()
puts @years
