package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Usuario;

public interface IUsuarioDao {

    public Optional<Usuario> buscarPorUser(String user);

    public Optional<Usuario> findById(Long id);

}
