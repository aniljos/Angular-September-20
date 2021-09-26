import { TestBed } from "@angular/core/testing";
import { DataBindingComponent } from "./databinding.component";

fdescribe("DataBining Component", () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [DataBindingComponent],
            imports:[],
            providers: []
        }).compileComponents();
    })

    it("create an instance", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        const instance = fixture.componentInstance;
        expect(instance).toBeTruthy();

    });

    it("increments the count", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        const instance = fixture.componentInstance;

        expect(instance.count).toBe(15);
        instance.inc({});
        expect(instance.count).toBe(16);
    })

    it("updates the template on incrementing the count", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        const instance = fixture.componentInstance;
        instance.inc({});
        fixture.detectChanges();

        const nativeEle = fixture.nativeElement;
        const content = nativeEle.querySelector("#ctr").textContent;
        expect(content).toContain("16");

        instance.inc({});
        fixture.detectChanges();
        const content1 = nativeEle.querySelector("#ctr").textContent;
        expect(content1).toContain("17");


    })

})