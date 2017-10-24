require 'csv'
require 'active_support/core_ext/object/blank'
require 'json'

class Parser

  attr_accessor :path, :medicina2004

  def initialize(path)
    @path = path
    @medicina2004 = { "name": "medicina2004", "years": [] }
  end

  def build_json
    previous_year = ""
    previous_regime = ""
    previous_subject = ""

    CSV.foreach(@path, row_sep: "\r\n", col_sep: ",") do |row|
      unless previous_year == row[0] #row[0] -> year
        @medicina2004[:years] << 
          { "name": row[0], "regimes": [] }
        previous_year = row[0]
      end
      unless previous_regime == row[1]
         @medicina2004[:years].detect {|y| y[:name]=row[0]}[:regimes] << { "name": row[1], "subjects": []  }
        previous_regime = row[1]
      end
    end
#    puts @medicina2004
  end

end

parser=Parser.new("medicina2004-ordenado.csv")
parser.build_json
