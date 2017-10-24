require 'active_support/core_ext/object/blank'
require 'csv'
require 'json'
require 'ostruct'

class Parser

  attr_accessor :json_file, :path,
    :year1, :year2, :year3, :year4, :year5, :year6, :years,
    :program


  def initialize(path)
    #path file
    @path = path
    # cathedras in subject
    #cathedras = []
    #subjects in regime_i, with i={"Bimestral", "Cuatrimestral", "Semestral"}
    #subjects = []
    #regime_i in yeasr_i, with i={1,2,3,4,5,6}
    @year1= {name: "Primero", regimes: []}
    @year2= {name: "Segundo", regimes: []}
    @year3= {name: "Tercero", regimes: []}
    @year4= {name: "Cuarto",  regimes: []}
    @year5= {name: "Quinto",  regimes: []}
    @year6= {name: "Sexto",   regimes: []}
    @years = [@year1, @year2, @year3, @year4, @year5, @year6]
    #@YEARS = { 1=>@year1, 2=>@year2, 3=>@year3, 4=>@year4, 5=>@year5, 6=>@year6 }
    @program = {name: "Medicina 2004", years: @years}
  end

  def build_json
    subject = []
    previous_subject = ""
    previous regime  = ""
    CSV.foreach(@path, row_sep: "\r\n", col_sep: ",") do |row|
      previous_subject = row[0] if previous_subject==""
      if previous_regime==""
        previous_regime  = row[3]
        create_regime(data.regime)
      end
      data = parse_array_to_hash(row)
      if data.subject == previous_subject
        #agregar al regime
        
        subject << data
      else
        #crear_subject
        new_subject = create_subject(data)
        add_cathedras_to_subject(new_subject, subject) #cathedras_collection contiene las cathedras de cada subject
        if data.regime != previous_regime
          create_regime(data.regime)
        end
        #----------------------
        subject = [data]
        #----------------------

        #new_subject = create_subject(data)
        #new_subject = add_cathedras_to_subject(new_subject, subject) #cathedras_collection contiene las cathedras de cada subject
        #find_or_create_regime(data.year, data.regime, new_subject)

      end
      previous_subject = data.subject
    end
  end

  def create_subject(data)
    {subject: data.subject, cathedras: []}
  end

  def create_regime(regime)
    {name: regime, subjects: []}
  end

  def add_cathedras_to_subject(new_subject, subjects)
    subjects.each do |s|
      new_subject.cathedras << OpenStruct.new(name:s.cathedra,
                     year: s.year,
                     regime: s.regime,
                     regime_type: s.regime_type,
                     professor: s.professor,
                     sec_schedule: s.sec_schedule,
                     sec_location: s.sec_location,
                     contact_name: s.contact_name,
                     contact_phone: s.contact_phone,
                     contact_email: s.contact_email,
                     tutorship_schedule: s.tutorship_schedule,
                     environment: s.environment,
                     environment_keys: s.environment_keys,
                     efiles: s.efiles,
                     sn_preparemos_fb: s.sn_preparemos_fb,
                     sn_facebook: s.sn_facebook,
                     sn_twitter: s.sn_twitter,
                     sn_web: s.sn_web)
    end
    new_subject
  end

  def create_subject_with_cathedras(subjects)
    new_subject = OpenStruct.new(subject: subjects.first.name, cathedras: [])
    subjects.each do |s|
      new_subject.cathedras << OpenStruct.new(name:s.cathedra,
                     year: s.year,
                     regime: s.regime,
                     regime_type: s.regime_type,
                     professor: s.professor,
                     sec_schedule: s.sec_schedule,
                     sec_location: s.sec_location,
                     contact_name: s.contact_name,
                     contact_phone: s.contact_phone,
                     contact_email: s.contact_email,
                     tutorship_schedule: s.tutorship_schedule,
                     environment: s.environment,
                     environment_keys: s.environment_keys,
                     efiles: s.efiles,
                     sn_preparemos_fb: s.sn_preparemos_fb,
                     sn_facebook: s.sn_facebook,
                     sn_twitter: s.sn_twitter,
                     sn_web: s.sn_web)
    end
    new_subject
  end

  def parse_array_to_hash(row)
    {
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
    }
  end

  def get_field(field)
    field.blank? ? nil : field.strip
  end


  def find_or_create_regime(year, regime, new_subject)
    if year == "1"
      unless @year1.regimes.detect { |r| r.name==regime }
        @year1.regimes <<  OpenStruct.new(name: regime, subjects: [])
      end
      regime = @year1.regimes.detect { |r| r.name==regime }
      regime.subjects << new_subject
    elsif year == "2"
      unless @year2.regimes.detect { |r| r.name==regime }
        @year2.regimes <<  OpenStruct.new(name: regime, subjects: [])
      end
      regime = @year2.regimes.detect { |r| r.name==regime }
      regime.subjects << new_subject
    elsif year == "3"
      unless @year3.regimes.detect { |r| r.name==regime }
        @year3.regimes <<  OpenStruct.new(name: regime, subjects: [])
      end
      regime = @year3.regimes.detect { |r| r.name==regime }
      regime.subjects << new_subject
    elsif year == "4"
      unless @year4.regimes.detect { |r| r.name==regime }
        @year4.regimes <<  OpenStruct.new(name: regime, subjects: [])
      end
      regime = @year4.regimes.detect { |r| r.name==regime }
      regime.subjects << new_subject
    elsif year == "5"
      unless @year5.regimes.detect { |r| r.name==regime }
        @year5.regimes <<  OpenStruct.new(name: regime, subjects: [])
      end
      regime = @year5.regimes.detect { |r| r.name==regime }
      regime.subjects << new_subject
    elsif year == "6"
      unless @year6.regimes.detect { |r| r.name==regime }
        @year6.regimes <<  OpenStruct.new(name: regime, subjects: [])
      end
      regime = @year6.regimes.detect { |r| r.name==regime }
      regime.subjects << new_subject
    end
  end

end


parser = Parser.new("test-medicina-1.csv")
#generate json structure on @json_file
parser.build_json
#print json on file "medicina2004.json"
#parser.save_json("medicina20014.json")
#find subject on json structure
#parser.find(subject: "Anatomía", cathedra: "A")
#
#
#
#
#      previous_subject = data.subject
#     puts "subject:: #{data.subject}--------------------------------------------------"
#      puts "same_subject:::::  #{same_subject}"
#      puts "longitud:::: #{same_subject.length}"
#      puts "esta es la data:--------------------------------------"
#      puts "subject:::: #{data.subject}"
#      puts "cathedra:::: #{data.cathedra}"
#      puts "year:::: #{data.year}"
#      puts "regimen::: #{data.regime}"
#      puts "regime_type::: #{data.regime_type}"
#      puts "professor::: #{data.professor}"
#      puts "sec_schedule::: #{data.sec_schedule}"
#      puts "sec_location::: #{data.sec_location}"
