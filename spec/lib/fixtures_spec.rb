require "rails_helper"

RSpec.describe Fixtures, type: :service do
  describe ".method_missing" do
    context "when using the name of director that does exist in lib/fixtures" do
      it "should respond with the expected directory" do
        expect(Fixtures.fests).to eq("#{Rails.root}/lib/fixtures/fests/")
      end
    end

    context "when using the name of director that does not exist" do
      it "should respond with nil" do
        expect(Fixtures.notreal).to be_nil
      end
    end
  end
end
