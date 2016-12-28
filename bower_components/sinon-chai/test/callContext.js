"use strict";var sinon;sinon=require("sinon");describe("Call context",function(){var notTheTarget,spy,target;spy=null;target=null;notTheTarget=null;beforeEach(function(){spy=sinon.spy();target={};return notTheTarget={}});describe("calledOn",function(){it("should throw an assertion error if the spy is never called",function(){return expect(function(){return spy.should.have.been.calledOn(target)}).to["throw"](AssertionError)});it("should throw an assertion error if the spy is called without a context",function(){spy();expect(function(){return spy.should.have.been.calledOn(target)}).to["throw"](AssertionError);return expect(function(){return spy.getCall(0).should.have.been.calledOn(target)}).to["throw"](AssertionError)});it("should throw an assertion error if the spy is called on the wrong context",function(){spy.call(notTheTarget);expect(function(){return spy.should.have.been.calledOn(target)}).to["throw"](AssertionError);return expect(function(){return spy.getCall(0).should.have.been.calledOn(target)}).to["throw"](AssertionError)});it("should not throw if the spy is called on the specified context",function(){spy.call(target);expect(function(){return spy.should.have.been.calledOn(target)}).to.not["throw"]();return expect(function(){return spy.getCall(0).should.have.been.calledOn(target)}).to.not["throw"]()});return it("should not throw if the spy is called on another context and also the specified context",function(){spy.call(notTheTarget);spy.call(target);expect(function(){return spy.should.have.been.calledOn(target)}).to.not["throw"]();return expect(function(){return spy.getCall(1).should.have.been.calledOn(target)}).to.not["throw"]()})});return describe("always calledOn",function(){it("should throw an assertion error if the spy is never called",function(){expect(function(){return spy.should.always.have.been.calledOn(target)}).to["throw"](AssertionError);expect(function(){return spy.should.have.always.been.calledOn(target)}).to["throw"](AssertionError);return expect(function(){return spy.should.have.been.always.calledOn(target)}).to["throw"](AssertionError)});it("should throw an assertion error if the spy is called without a context",function(){spy();expect(function(){return spy.should.always.have.been.calledOn(target)}).to["throw"](AssertionError);expect(function(){return spy.should.have.always.been.calledOn(target)}).to["throw"](AssertionError);return expect(function(){return spy.should.have.been.always.calledOn(target)}).to["throw"](AssertionError)});it("should throw an assertion error if the spy is called on the wrong context",function(){spy.call(notTheTarget);expect(function(){return spy.should.always.have.been.calledOn(target)}).to["throw"](AssertionError);expect(function(){return spy.should.have.always.been.calledOn(target)}).to["throw"](AssertionError);return expect(function(){return spy.should.have.been.always.calledOn(target)}).to["throw"](AssertionError)});it("should not throw if the spy is called on the specified context",function(){spy.call(target);expect(function(){return spy.should.always.have.been.calledOn(target)}).to.not["throw"]();expect(function(){return spy.should.have.always.been.calledOn(target)}).to.not["throw"]();return expect(function(){return spy.should.have.been.always.calledOn(target)}).to.not["throw"]()});return it("should throw an assertion error if the spy is called on another context and also the specified context",function(){spy.call(notTheTarget);spy.call(target);expect(function(){return spy.should.always.have.been.calledOn(target)}).to["throw"](AssertionError);expect(function(){return spy.should.have.always.been.calledOn(target)}).to["throw"](AssertionError);return expect(function(){return spy.should.have.been.always.calledOn(target)}).to["throw"](AssertionError)})})});