package com.capitalhumano.modelo;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;



@Data 
@Entity 
@Table (name = "candidato")
public class Candidato {

    
    public enum Genero {
        H, M, X;
    }

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long nroCandidato;

    @Column 
    private String apellido;

    @Column 
    private String nombre;

    @Column 
    private String nroDocumento;

    @Column 
    private Date fechaNacimiento;

    @Enumerated(EnumType.STRING)
    @Column 
    private Genero genero;

    @Column 
    private String nacionalidad;

    @Column 
    private String email;

    @Column 
    private String escolaridad;

    @Column 
    private boolean eliminado;

}
