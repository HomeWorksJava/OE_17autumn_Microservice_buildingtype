package com.example.hello.rest;


import java.util.List;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import com.example.hello.LocationBuildings.Builoc;
import com.example.hello.LocationBuildings.SessionBeanLocBuil;
import java.io.StringReader;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.Consumes;
import javax.ws.rs.PathParam;


import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("hello")
@Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
public class HelloWorldEndpoint {        
    //List<LocBuil> ret = new LinkedList<LocBuil>();
    @Inject
    SessionBeanLocBuil BL;

    public HelloWorldEndpoint(){
        /*ret.add(new LocBuil(1,"n1", "t1", "l1"));
        ret.add(new LocBuil(2,"n2", "t2", "l2"));
        ret.add(new LocBuil(3,"n3", "t3", "l3"));*/
    }

   /* @GET       
    @Path("single/{name}") 
    public Response getSingle(@PathParam("name") String name) {    

        //return Response.ok(name+" "+ret.size()).build();
    }*/
    //https://github.com/wildfly-swarm/wildfly-swarm-examples/blob/master/kitchensink-html5-mobile/src/main/java/org/jboss/as/quickstarts/html5_mobile/rest/MemberService.java#L79
    @GET       
    @Path("remove/{id:[0-9][0-9]*}") 
    public boolean Remove(@PathParam("id") int id) {                
         /*for (int i = 0; i < ret.size(); i++) 
            if(ret.get(i).getId() == id){
                ret.remove(i);
                return true;
            } */
         Map<String, Object> vp = new HashMap<>();
         vp.put("locationbuildingid", id);
         Builoc b = (Builoc) BL.getEntities("Builoc.findByLocationBuildingid",vp).get(0);
         BL.remove(b);
         return true;
    }
    @POST       
    @Path("add") 
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response Add(Builoc Record) {   
        Builoc b = new Builoc();
        b.setBuildingSize(Record.getBuildingSize());
        b.setLocationid(Record.getLocationid());
        b.setBuildingName(Record.getBuildingName());
        b.setBuildingTypeid(Record.getBuildingTypeid());
//        BL.create(Record);
        BL.merge(Record);
        //JsonObject jsonObject = Json.createReader(new StringReader(record)).readObject();        
        //JsonObject jsonObject = new JsonObject(record);
        /*
        LocBuil lb = new LocBuil();
        lb.setId(0);
        lb.setName(jsonObject.getString("name"));
        lb.setLocation(jsonObject.getString("location"));       
       */ 
        return Response.ok(Record.getBuildingName()).build();
    }
    @POST       
    @Path("edit") 
    //@Consumes({"application/xml", "application/json"})
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response Edit(Builoc Record) {       
        BL.edit(Record);
        //JsonObject jsonObject = Json.createReader(new StringReader(record)).readObject();        
        //JsonObject jsonObject = new JsonObject(record);
        /*
        LocBuil lb = new LocBuil();
        lb.setId(0);
        lb.setName(jsonObject.getString("name"));
        lb.setLocation(jsonObject.getString("location"));       
       */ 
        return Response.ok("wtf").build();
    }
    //wildfly alá bedeployolva http://localhost:8080/halo/hello/All
    @GET         
    @Path("All") 
    @Produces(MediaType.APPLICATION_JSON)
    public List<Builoc> getAll() {
        return BL.findAll();
    }
}