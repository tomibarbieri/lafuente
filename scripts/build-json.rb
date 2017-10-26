require 'csv'
require 'active_support/core_ext/object/blank'
require 'json'

class Parser

  attr_accessor :path, :medicina2004, :year_actual, :regime_actual, :subject_actual

  def initialize(path)
    @path = path
    @medicina2004 = { "name": "medicina2004", "years": [] }
  end

  def build_json
    previous_year = ""
    year_index = 0
    previous_regime = ""
    regime_index = 0
    previous_subject = ""
    subject_index = 0
    i = 0

    CSV.foreach(@path, row_sep: "\r\n", col_sep: ",") do |row|
      unless previous_year == row[0] #row[0] -> year
        @medicina2004[:years] << { "name": row[0], "regimes": [] }
        previous_year = row[0]
        @year_actual = @medicina2004[:years][year_index]
        year_index = year_index + 1
        regime_index = 0
        subject_index = 0
        i = 0
      end

      if previous_regime != row[1] || previous_year != row[0]  # row[1] -> regime
        @year_actual[:regimes] << { "name": row[1], "subjects": [] }
        previous_regime = row[1]
        regime_index = regime_index + 1
        subject_index = 0
      end

      if previous_subject != row[2] || previous_regime != row[1] || previous_year != row[0]
        @year_actual[:regimes][regime_index-1][:subjects] << { "name": row[2], "cathedras": [] } 
        previous_subject = row[2]
        subject_index = subject_index + 1
      end
      cathedra = {
        "name": clean_field(row[3]),
        "regime:" clean_field(row[1]),
        "regime_type": clean_field(row[4]),
        "professor": clean_field(row[5]),
        "sec_scheduler": clean_field(row[6]),
        "sec_location": clean_field(row[7]),
        "contact_name": clean_field(row[8]),
        "contact_phone": clean_field(row[9]),
        "contact_email": clean_field(row[10]),
        "tutorship_schedule": clean_field(row[11]),
        "environment": clean_field(row[12]),
        "environment_keys": clean_field(row[13]),
        "sn_preparemos_fb": clean_field(row[14]),
        "sn_facebook": clean_field(row[15]),
        "sn_cathedra_fb": clean_field(row[16])
        "sn_twitter": clean_field(row[17]),
        "sn_web": clean_field(row[18])
      }
      @year_actual[:regimes][regime_index-1][:subjects][subject_index-1][:cathedras] << cathedra
      File.open("resultado.json", 'w') { |file| file.write(@medicina2004.to_json) }
    end
  end

  def clean_field(field)
    field.blank? ? "" : field.strip
  end

end

parser=Parser.new("medicina2004.csv")
parser.build_json
