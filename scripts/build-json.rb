require 'active_support/core_ext/object/blank'
require 'csv'
require 'json'
require 'ostruct'

class Parser

  attr_accessor :program

  def initialize(path)
    @path = path
#    @cathedra1 = OpenStruct.new(nombre: nil, titular: nil, sec_horarios: nil, sec_ubicacion: nil)
    @catedras = []
#    @subject1 = OpenStruct.new(subject: nil, cathedras: @catedras)
    @subjects = []
#    @regime3 = OpenStruct.new(name: "Bimestral", subjects: @subjects )
#    @regime2 = OpenStruct.new(name: "Cuatrimestral", subjects: @subjects )
#    @regime1 = OpenStruct.new(name: "Anual", subjects: @subjects )
#    @regimes = [@regime1, @regime2, @regime3] 
    @year1= OpenStruct.new(name: "Primero", regimes: [])
    @year2= OpenStruct.new(name: "Segundo", regimes: [])
    @year3= OpenStruct.new(name: "Tercero", regimes: [])
    @year4= OpenStruct.new(name: "Cuarto",  regimes: [])
    @year5= OpenStruct.new(name: "Quinto",  regimes: [])
    @year6= OpenStruct.new(name: "Sexto",   regimes: [])
    @years = [@year1, @year2, @year3, @year4, @year5, @year6]
    @program = OpenStruct.new(name: "Medicina 2004", years: @years)
  end

  def parse_file
    CSV.foreach(@path, "r") do |row|
      build_row(
        OpenStruct.new({
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
         })
        )
    end
  end

  def build_row(row)
    if row.catedra.blank?
      create_subject(row)
    else
      result = find_subject(row.materia)
      add_cathedra_to_subject(result, row)
    end 
  end

    def create_cathedra(row)
       OpenStruct.new(nombre: row.catedra, titular: row.titular,
                      sec_horarios: row.sec_horarios, sec_ubicacion: row.sec_ubicacion)
    end

    def create_subject(row)
      cathedra = create_cathedra(row)
      subject = OpenStruct.new(subject: row.materia, cathedras: [cathedra])
      if regime_was_created
        find_and_add_subject_to_regime(subject, row.anio)
      else
        create_regime(row)
      end
    end

  
    def find_and_add_subject_to_regime(subject, iyear)

    end

    def create_regime(with_subject, year)
      regime = OpenStruct.new(name: row.regime ,subjects: with_subject )
      case year
      when "1"
        @year1.regimes << regime
      when "2"
        @year2.regimes << regime
      when "3"
        @year3.regimes << regime
      when "4"
        @year4.regimes << regime
      when "5"
        @year5.regimes << regime
      when "6"
        @year6.regimes << regime
      end
    end

    def find_and_create_subject(row)

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
  #parser.parseFile()
  #puts @years
