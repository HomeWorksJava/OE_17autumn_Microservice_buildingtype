package com.example.hello.rest;
import javax.ws.rs.core.Application;
import org.jboss.shrinkwrap.api.ShrinkWrap;
//import org.wildfly.swarm.container.Container;
import org.wildfly.swarm.jaxrs.JAXRSArchive;

public class Main {
    public static void main(final String... args) throws Exception {       
        /*final Container container = new Container();
        final JAXRSArchive deployment = ShrinkWrap.create( JAXRSArchive.class );
        deployment.addResource( HelloWorldEndpoint.class );
        deployment.addResource( Application.class );
        deployment.addResource( CORSFilter.class );      
        container.start();
        container.deploy(deployment);*/
    }
}