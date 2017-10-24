require 'active_support/core_ext/object/blank'
require 'csv'
require 'json'
require 'ostruct'

class Parser

  attr_accessor :json_file, :path, :catedras, :subjects,
    :year1, :year2, :year3, :year4, :year5, :year6, :years,
    :program
 
  def initialize(path)
    #path file
    @path = path
    # cathedras in subject
    @cathedras = []
    #subjects in regime_i, with i={"Bimestral", "Cuatrimestral", "Semestral"}
    @subjects = []
    #regime_i in yeasr_i, with i={1,2,3,4,5,6}
    @year1= OpenStruct.new(name: "Primero", regimes: [])
    @year2= OpenStruct.new(name: "Segundo", regimes: [])
    @year3= OpenStruct.new(name: "Tercero", regimes: [])
    @year4= OpenStruct.new(name: "Cuarto",  regimes: [])
    @year5= OpenStruct.new(name: "Quinto",  regimes: [])
    @year6= OpenStruct.new(name: "Sexto",   regimes: [])
    @years = [@year1, @year2, @year3, @year4, @year5, @year6]
    @program = OpenStruct.new(name: "Medicina 2004", years: @years)
  end

  def build_json
    previous_subject = ""
    same_subject = []
    CSV.foreach(@path, row_sep: "\r\n", col_sep: ",") do |row|
      data = parse_array_to_hash(row)
      if data.subject == previous_subject
        same_subject << data
      else
        same_subject = [data]
      end
      previous_subject = data.subject
      puts "same_subject:::::  #{same_subject}"
      puts "longitud:::: #{same_subject.length}"
#      puts "esta es la data:--------------------------------------"
#      puts "subject:::: #{data.subject}"
#      puts "cathedra:::: #{data.cathedra}"
#      puts "year:::: #{data.year}"
#      puts "regimen::: #{data.regime}"
#      puts "regime_type::: #{data.regime_type}"
#      puts "professor::: #{data.professor}"
#      puts "sec_schedule::: #{data.sec_schedule}"
#      puts "sec_location::: #{data.sec_location}"
    end
  end

  def parse_array_to_hash(row) 
    OpenStruct.new({
      subject: get_field(row[0]),
      cathedra: get_field(row[1]),
      year: get_field(row[2]),
      regime: get_field(row[3]),
      regime_type: get_field(row[4]),
      professor: get_field(row[5]),
      sec_schedule: get_field(row[6]),
      sec_location: get_field(row[7]), 
      contact_name: get_field(row[8]),
      contact_phone: get_field(row[9]),
      contact_email: get_field(row[10]),
      tutorship_schedule: get_field(row[11]), 
      environment: get_field(row[12]), 
      environment_keys: get_field(row[13]), 
      efiles: get_field(row[14]),
      sn_preparemos_fb: get_field(row[15]),
      sn_facebook: get_field(row[16]),
      sn_twitter: get_field(row[17]),
      sn_web: get_field(row[18])
    })
  end

  def get_field(field)
    field.blank? ? nil : field.strip
  end

end


parser = Parser.new("test-medicina.csv")
#generate json structure on @json_file
parser.build_json
#print json on file "medicina2004.json"
#parser.save_json("medicina20014.json")
#find subject on json structure
#parser.find(subject: "Anatomía", cathedra: "A")
