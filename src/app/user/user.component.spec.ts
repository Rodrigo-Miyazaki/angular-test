import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as user name Test', ()=>{
    expect(component.user.name).toEqual('Test');
  })

  it('type user name should be String', ()=>{
    expect(component.user.name).toBeInstanceOf(String);
  })

  it('user should not to be undefined', ()=>{
    expect(component.user).not.toBeUndefined();
  })
});
