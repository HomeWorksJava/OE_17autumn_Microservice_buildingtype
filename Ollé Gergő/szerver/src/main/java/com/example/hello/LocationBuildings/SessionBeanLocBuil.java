/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.hello.LocationBuildings;
import java.util.HashMap;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author Gery
 */
@Stateless
public class SessionBeanLocBuil extends AbstractFacade<Builoc> {

    @PersistenceContext(unitName = "PUN")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public SessionBeanLocBuil() {
        super(Builoc.class);
    }
    public List<Builoc> findBL() {
       HashMap<String,Object> params = new HashMap<>();               
       return (List<Builoc>)getEntities("Builoc.findAll", params);
    }     
}
