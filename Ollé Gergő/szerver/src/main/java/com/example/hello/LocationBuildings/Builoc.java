/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.hello.LocationBuildings;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author olleg
 */
@Entity
@XmlRootElement
@Table(name = "builoc")
@NamedQueries({
    @NamedQuery(name = "Builoc.findAll", query = "SELECT b FROM Builoc b")
    , @NamedQuery(name = "Builoc.findByLocationBuildingid", query = "SELECT b FROM Builoc b WHERE b.locationbuildingid = :locationbuildingid")})
   
public class Builoc implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "locationbuilding_id")
    private Integer locationbuildingid;                    
    @Basic(optional = false)
    @NotNull
    @Column(name = "buildingtype_id")
    private int buildingtypeid;
    @Basic(optional = false)
    @NotNull
    @Column(name = "location_id")
    private int locationid;
    @Size(max = 50)
    private String buildingname;
    private Integer buildingsize;

    public Builoc() {
    }

    public Builoc(Integer locationBuildingid) {
        this.locationbuildingid = locationBuildingid;
    }

    public Builoc(Integer locationBuildingid, int buildingTypeid, int locationid) {
        this.locationbuildingid = locationBuildingid;
        this.buildingtypeid = buildingTypeid;
        this.locationid = locationid;
    }

    public Integer getLocationBuildingid() {
        return locationbuildingid;
    }

    public void setLocationBuildingid(Integer locationBuildingid) {
        this.locationbuildingid = locationBuildingid;
    }

    public int getBuildingTypeid() {
        return buildingtypeid;
    }

    public void setBuildingTypeid(int buildingTypeid) {
        this.buildingtypeid = buildingTypeid;
    }

    public int getLocationid() {
        return locationid;
    }

    public void setLocationid(int locationid) {
        this.locationid = locationid;
    }

    public String getBuildingName() {
        return buildingname;
    }

    public void setBuildingName(String buildingName) {
        this.buildingname = buildingName;
    }

    public Integer getBuildingSize() {
        return buildingsize;
    }

    public void setBuildingSize(Integer buildingSize) {
        this.buildingsize = buildingSize;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (locationbuildingid != null ? locationbuildingid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Builoc)) {
            return false;
        }
        Builoc other = (Builoc) object;
        if ((this.locationbuildingid == null && other.locationbuildingid != null) || (this.locationbuildingid != null && !this.locationbuildingid.equals(other.locationbuildingid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.example.hello.LocationBuildings.Builoc[ locationBuildingid=" + locationbuildingid + " ]";
    }
    
}
